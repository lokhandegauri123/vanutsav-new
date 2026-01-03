import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function formatDateLocal(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function AvailabilityCalendar() {
  const [bookedDates, setBookedDates] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("availability")) || {};
    setBookedDates(Object.keys(stored).sort());
  }, []);

  const saveToStorage = (date, data) => {
    const stored = JSON.parse(localStorage.getItem("availability")) || {};
    stored[date] = data;
    localStorage.setItem("availability", JSON.stringify(stored));
    setBookedDates(Object.keys(stored));
  };

  const navigate = useNavigate();

const handleClickDate = (date) => {
  const day = formatDateLocal(date);
  const today = formatDateLocal(new Date());

  // 0️⃣ Check if user is logged in
  if (!auth.currentUser) {
    alert("Please sign in to book a date.");
    navigate("/signin");
    return;
  }

  // 1️⃣ If booked → show alert
  if (bookedDates.includes(day)) {
    alert("This date is already booked!");
    return;
  }

  // 2️⃣ If past → prevent
  if (day < today) {
    alert("You cannot book a past date.");
    return;
  }

  // 3️⃣ Otherwise → open booking popup
  setSelectedDate(day);
  setShowForm(true);
};



  const handleSubmit = () => {
    if (!userData.name || !userData.email || !userData.phone) {
      alert("Please fill all fields");
      return;
    }

    saveToStorage(selectedDate, {
      status: "booked",
      ...userData,
    });

    alert("Booking Confirmed for " + selectedDate);

    setShowForm(false);
    setUserData({ name: "", email: "", phone: "" });
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const day = formatDateLocal(date);
      const today = formatDateLocal(new Date());

      if (bookedDates.includes(day))
        return "bg-red-500 text-white rounded-full cursor-not-allowed opacity-60";

      if (day < today)
        return "opacity-40 cursor-not-allowed";

      return "bg-green-300 rounded-full cursor-pointer";
    }
  };

  const tileContent = ({ date, view }) => {
    if (view !== "month") return null;
    const day = formatDateLocal(date);

    if (bookedDates.includes(day))
      return (
        <div className="absolute right-1 top-1 text-white font-bold">✓</div>
      );

    return null;
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Availability Calendar</h1>

      <Calendar
        onClickDay={handleClickDate}
        tileClassName={tileClassName}
        tileContent={tileContent}
      />

      {/* Booking Popup Form */}
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-80 shadow-xl">
            <h2 className="text-xl font-bold mb-4">
              Book Date: {selectedDate}
            </h2>

            <input
              type="text"
              placeholder="Name"
              className="border p-2 w-full mb-2 rounded"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email"
              className="border p-2 w-full mb-2 rounded"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="Phone"
              className="border p-2 w-full mb-4 rounded"
              value={userData.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />

            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded w-full"
            >
              Confirm Booking
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="mt-2 text-red-500 w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* <div className="mt-4 flex gap-6">
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-500 rounded-full"></span>Booked
        </span>
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 bg-green-300 rounded-full"></span>Available
        </span>
      </div> */}
    </div>
  );
}
