import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";   // adjust path if needed
import { useNavigate } from "react-router-dom";

export default function Publiclayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/signin"); // Redirect to Sign In after logout
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <header className="bg-gray-100 p-10 flex gap-4 text-[20px] font-bold items-center">

  <Link to="/" className="text-blue-600">Van Utsav</Link>

  <Link to="/" className="text-blue-600">Home</Link>
  <Link to="/about" className="text-blue-600">About</Link>
  {/* <Link to="/my-packages" className="text-blue-600">My Packages</Link> */}
  <Link to="/mypackage" className="text-blue-600">My Package</Link>

  <Link to="/gallary" className="text-blue-600">Gallery</Link>
  <Link to="/our-package" className="text-blue-600">Our Package</Link>
  <Link to="/school-package" className="text-blue-600">School Package</Link>
  <Link to="/calendar" className="text-blue-600">Availability</Link>
  <Link to="/contact" className="text-blue-600">Contact</Link>
  {/* <Link to= "/admin-calendar" className="text-blue-600" >Admin</Link> */}
  <Link to="/supportfeedback" className="text-blue-600">SupportFeedback</Link>

  {/* --------- USER SECTION --------- */}
  <div className="ml-auto flex items-center gap-4">

    {/* Show email if user logged in */}
    {auth.currentUser && (
      <span className="text-green-600 text-[18px]">
        {auth.currentUser.email}
      </span>
    )}

    {/* Show SignIn only if NOT logged in */}
    {!auth.currentUser && (
      <Link to="/signin" className="text-blue-600">SignIn</Link>
    )}

    {/* Show logout only if logged in */}
    {auth.currentUser && (
      <button
        onClick={handleLogout}
        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    )}
  </div>
</header>


      <main>
        {/* Nested routes will render here */}
        <Outlet />
      </main>

      {/* <footer className="bg-gray-200 p-4 text-center mt-4">
        &copy; 2025 Vanutsav
      </footer> */}
    </div>
  );
}
