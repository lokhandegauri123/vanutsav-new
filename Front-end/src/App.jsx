// import React, { Suspense } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// // 🔹 Lazy load components
// const Publiclayout = React.lazy(() => import('./public/Publiclayout'));
// const Hero = React.lazy(() => import('./public/components/Hero'));
// const About = React.lazy(() => import('./public/pages/About'));
// const MyPackages = React.lazy(() => import('./public/pages/MyPackages'));
// const OurGallary = React.lazy(() => import('./public/pages/OurGallary'));
// const OurPackage = React.lazy(() => import('./public/pages/OurPackage'));
// const SchoolPackage = React.lazy(() => import('./public/pages/SchoolPackage'));
// const Contact = React.lazy(() => import('./public/pages/Contact'));

// function App() {
//   return (
//     <BrowserRouter>
//       <Suspense
//         fallback={
//           <div className="flex flex-row space-x-4 justify-center items-center mt-56">
//             <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
//           </div>
//         }
//       >
//         <Routes>
//           {/* Publiclayout is also lazily loaded */}
//           <Route path='/' element={<Publiclayout />}>
//             <Route index element={<Hero />} />
//             <Route path='about' element={<About />} />
//             <Route path='my-packages' element={<MyPackages />} />
//             <Route path='gallary' element={<OurGallary />} />
//             <Route path='our-package' element={<OurPackage />} />
//             <Route path='school-package' element={<SchoolPackage />} />
//             <Route path='contact' element={<Contact />} />
//           </Route>
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }

// export default App;

// *************************************
// import React, { Suspense, lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import PrivateRoute from "./PrivateRoute";
// // Lazy-loaded components
// const Publiclayout = lazy(() => import('./public/Publiclayout'));
// const Hero = lazy(() => import('./public/components/Hero'));
// const About = lazy(() => import('./public/pages/About'));
// const MyPackages = lazy(() => import('./public/pages/MyPackages'));
// const OurGallary = lazy(() => import('./public/pages/OurGallary'));
// const OurPackage = lazy(() => import('./public/pages/OurPackage'));
// const SchoolPackage = lazy(() => import('./public/pages/SchoolPackage'));
// const Contact = lazy(() => import('./public/pages/Contact'));
// const Payment = lazy(() => import('./public/pages/Payment'));
// const SignIn = lazy(() => import('./public/pages/SignIn.jsx'));
// const SupportFeedback = lazy(() => import('./public/pages/SupportFeedback.jsx'));

// export default function App() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex flex-row space-x-4 justify-center items-center mt-56">
//           <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
//         </div>
//       }
//     >
//       <Routes>
//         <Route path="/" element={<Publiclayout />}>
//           <Route index element={<Hero />} />
//           <Route path="about" element={<About />} />
//           <Route path="my-packages" element={<MyPackages />} />
//           <Route path="gallary" element={<OurGallary />} />
//           <Route path="our-package" element={<OurPackage />} />
//           <Route path="school-package" element={<SchoolPackage />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="payment" element={<Payment />} />
//           <Route path="signin" element={<SignIn />} />
//           <Route path="supportfeedback" element={<SupportFeedback />} />

//         </Route>
//       </Routes>
//     </Suspense>
//   );
// }
// ***************************************

import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

// Lazy-loaded components
const Publiclayout = lazy(() => import("./public/Publiclayout"));
const Hero = lazy(() => import("./public/components/Hero"));
const About = lazy(() => import("./public/pages/About"));
const MyPackages = lazy(() => import("./public/pages/MyPackages")); // 🔹 Your MyPackage page
const OurGallary = lazy(() => import("./public/pages/OurGallary"));
const OurPackage = lazy(() => import("./public/pages/OurPackage"));
const SchoolPackage = lazy(() => import("./public/pages/SchoolPackage"));
const Contact = lazy(() => import("./public/pages/Contact"));

const Payment = lazy(() => import("./public/pages/Payment"));
const SignIn = lazy(() => import("./public/pages/SignIn"));
const SupportFeedback = lazy(() => import("./public/pages/SupportFeedback"));
const AvailabilityCalendar = lazy(() =>
  import("./public/pages/AvailabilityCalendar")
);

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-row space-x-4 justify-center items-center mt-56">
          <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Publiclayout />}>
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />

          {/* 🔹 This replaces Booking — MyPackages is now here */}
          <Route path="mypackage" element={<MyPackages />} />

          <Route path="gallary" element={<OurGallary />} />
          <Route path="our-package" element={<OurPackage />} />
          <Route path="school-package" element={<SchoolPackage />} />

          <Route path="calendar" element={<AvailabilityCalendar />} />
          <Route path="contact" element={<Contact />} />

          {/* 🔐 Protected Payment */}
          <Route
            path="payment"
            element={
              <PrivateRoute>
                <Payment />
              </PrivateRoute>
            }
          />

          <Route path="signin" element={<SignIn />} />
          <Route path="supportfeedback" element={<SupportFeedback />} />

          {/* Optional: 404 Page */}
          <Route
            path="*"
            element={
              <h1 className="text-center mt-20 text-3xl">Page Not Found</h1>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}
