import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (!formData.name || !formData.email || !formData.password) {
        toast.error("Please fill all fields");
        return;
      }

      try {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        toast.success("Account created successfully!");
        navigate("/mypackage"); // redirect after Sign Up
      } catch (error) {
        toast.error(error.message);
      }
    } 
    
    else {
      if (!formData.email || !formData.password) {
        toast.error("Please fill all fields");
        return;
      }

      try {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        toast.success("Signed in successfully!");
        navigate("/mypackage"); // redirect after Sign In
      } catch (error) {
        if (error.code === "auth/user-not-found") {
          toast.error("No account found. Please create an account first.");
        } else {
          toast.error(error.message);
        }
      }
    }

    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-400 to-blue-500 font-sans">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isSignUp ? "Create Account" : "Sign In"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{' '}
          <span
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-green-500 font-medium cursor-pointer hover:underline"
          >
            {isSignUp ? "Sign In" : "Create Account"}
          </span>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignIn;
