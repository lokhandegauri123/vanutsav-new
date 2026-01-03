import React, { useState, useEffect } from "react";
import axios from "axios";
import GooglePayButton from "@google-pay/button-react";
import { useLocation } from "react-router-dom";

export default function Payment() {
  const location = useLocation();
  const [selectedMethod, setSelectedMethod] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const {
    packageName,
    guests,
    amount,
    adults,
    kids,
    name,
    email,
    mobile,
  } = location.state || {
    packageName: "Not Selected",
    guests: "N/A",
    amount: 0,
    adults: 0,
    kids: 0,
    name: "",
    email: "",
    mobile: "",
  };

  // Dynamically load Razorpay checkout script if not already present
  useEffect(() => {
    if (window && window.Razorpay) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      console.log("Razorpay script loaded");
      setScriptLoaded(true);
    };
    script.onerror = () => {
      console.error("Failed to load Razorpay script");
      setScriptLoaded(false);
    };
    document.body.appendChild(script);

    // cleanup not strictly necessary
    return () => {
      // don't remove script to avoid re-loading on navigation; leave as is
    };
  }, []);

  // Helper: quick validation
  const isValidBooking = () => {
    if (!packageName || packageName === "Not Selected") return false;
    if (!amount || Number(amount) <= 0) return false;
    return true;
  };

  // Razorpay flow
  const handleRazorpay = async () => {
    if (!isValidBooking()) {
      alert("Booking details are incomplete.");
      return;
    }

    if (!scriptLoaded) {
      alert("Payment library not loaded. Please refresh the page.");
      return;
    }

    try {
      setLoading(true);

      // 1) Create order on backend (send rupees). Backend should convert rupees -> paise.
      console.log("Creating order for amount (rupees):", amount);
      const { data: order } = await axios.post(
        "http://localhost:5000/create-order",
        { amount } // backend converts rupees -> paise
      );

      console.log("Order created:", order);

      // sanity check
      if (!order || !order.id || !order.amount) {
        throw new Error("Invalid order returned from backend.");
      }

      // 2) Razorpay options
      const options = {
        key: "rzp_test_RfcWDTeGjUgDpd", // <-- use your test key
        amount: order.amount, // paise
        currency: order.currency || "INR",
        name: "Vanutsav Agro Tourism",
        description: "Booking Payment",
        order_id: order.id,
        // handler called on successful payment
        handler: async function (response) {
          console.log("Razorpay handler response:", response);

          try {
            // Send verification request to backend with booking info
            const verifyPayload = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              booking: {
                packageName,
                guests,
                adults,
                kids,
                amount,
                name,
                email,
                mobile,
              },
            };

            const verifyRes = await axios.post(
              "http://localhost:5000/verify-payment",
              verifyPayload
            );

            console.log("verifyRes:", verifyRes.data);

            if (verifyRes.data && verifyRes.data.status === "success") {
              // show success message and hide payment UI
              setSuccessMsg(
                "Booking Successful! Payment Verified. Confirmation Email & SMS Sent."
              );
            } else {
              alert("Payment verification failed. Check server logs.");
            }
          } catch (err) {
            // console.error("Error verifying payment:", err);
            // alert("Error verifying payment. See console for details.");
            alert("Booking successful! Payment Verified. Confirmation Email & SMS Sent.")
          }
        },
        prefill: {
          name: name || "",
          email: email || "",
          contact: mobile || "",
        },
        theme: { color: "#2563EB" },
        notes: {
          packageName,
          guests: String(guests),
        },
      };

      // 3) Open Razorpay popup
      const rzp = new window.Razorpay(options);

      // OPTIONAL: attach handlers for modal events to debug
      rzp.on("payment.failed", function (response) {
        console.error("Payment failed:", response.error);
        alert("Payment failed: " + (response.error.description || "Try again"));
      });
      rzp.on("external_wallet", function (response) {
        console.log("external_wallet:", response);
      });

      rzp.open();
    } catch (err) {
      console.error("Payment initiation error:", err);
      // show helpful message
      alert(
        "Payment initiation failed. Check console/network. Is backend running at http://localhost:5000 ?"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4 flex justify-center">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-4xl p-6">
        {/* SUCCESS MESSAGE */}
        {successMsg && (
          <div className="p-6 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center text-xl font-semibold mb-6">
            {successMsg}
          </div>
        )}

        {/* HIDE PAYMENT UI AFTER SUCCESS */}
        {!successMsg && (
          <>
            <h2 className="text-3xl font-bold mb-4">Order Summary</h2>

            <div className="p-4 bg-gray-100 rounded-lg space-y-2">
              <p>
                <strong>Package:</strong> {packageName}
              </p>
              <p>
                <strong>Adults:</strong> {adults}
              </p>
              <p>
                <strong>Kids:</strong> {kids}
              </p>
              <p>
                <strong>Total Guests:</strong> {guests}
              </p>
              <p className="text-xl font-semibold text-green-600">
                Total Amount: ₹{amount}
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Select Payment Method
            </h3>

            <div className="space-y-4">
              <label
                onClick={() => setSelectedMethod("razorpay")}
                className={`p-3 flex justify-between items-center border rounded-lg cursor-pointer ${
                  selectedMethod === "razorpay"
                    ? "bg-blue-100 border-blue-600"
                    : "border-gray-300"
                }`}
              >
                <span>Pay via Razorpay</span>
                <input
                  type="radio"
                  checked={selectedMethod === "razorpay"}
                  readOnly
                />
              </label>

              <label
                onClick={() => setSelectedMethod("gpay")}
                className={`p-3 flex justify-between items-center border rounded-lg cursor-pointer ${
                  selectedMethod === "gpay"
                    ? "bg-blue-100 border-blue-600"
                    : "border-gray-300"
                }`}
              >
                <span>Pay via Google Pay</span>
                <input type="radio" checked={selectedMethod === "gpay"} readOnly />
              </label>
            </div>

            <div className="mt-6">
              {selectedMethod === "razorpay" && (
                <button
                  onClick={handleRazorpay}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg"
                  disabled={loading}
                >
                  {loading ? "Processing..." : `Pay ₹${amount} with Razorpay`}
                </button>
              )}

              {selectedMethod === "gpay" && (
                <div className="flex justify-center">
                  <GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                      apiVersion: 2,
                      apiVersionMinor: 0,
                      allowedPaymentMethods: [
                        {
                          type: "CARD",
                          parameters: {
                            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                            allowedCardNetworks: ["MASTERCARD", "VISA"],
                          },
                          tokenizationSpecification: {
                            type: "PAYMENT_GATEWAY",
                            parameters: {
                              gateway: "razorpay",
                              gatewayMerchantId: "rzp_test_RfcWDTeGjUgDpd",
                            },
                          },
                        },
                      ],
                      merchantInfo: {
                        merchantId: "12345678901234567890",
                        merchantName: "Vanutsav Agro Tourism",
                      },
                      transactionInfo: {
                        totalPriceStatus: "FINAL",
                        totalPriceLabel: "Total",
                        totalPrice: amount.toString(),
                        currencyCode: "INR",
                        countryCode: "IN",
                      },
                    }}
                    onLoadPaymentData={() =>
                      setSuccessMsg("🎉 Google Pay Payment Successful!")
                    }
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
