// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import emailjs from 'emailjs-com';

// const SupportFeedback = () => {
//   const [activeTab, setActiveTab] = useState('support'); // support or feedback
//   const [supportData, setSupportData] = useState({
//     name: '',
//     email: '',
//     issue: '',
//   });
//   const [feedbackData, setFeedbackData] = useState({
//     name: '',
//     email: '',
//     rating: 0,
//     comments: '',
//   });

//   const handleSupportChange = (e) => {
//     const { name, value } = e.target;
//     setSupportData({ ...supportData, [name]: value });
//   };

//   const handleFeedbackChange = (e) => {
//     const { name, value } = e.target;
//     setFeedbackData({ ...feedbackData, [name]: value });
//   };

//   const sendEmail = async (templateId, data) => {
//     try {
//       await emailjs.send(
//         'service_hderd6w', // Your EmailJS service ID
//         templateId,
//         data,
//         'A7Pd8dglq_29APzOa' // Your EmailJS user ID
//       );
//       toast.success('Submitted successfully!');
//     } catch (error) {
//       console.error(error);
//       toast.error('Failed to submit. Please try again.');
//     }
//   };

//   const handleSupportSubmit = (e) => {
//     e.preventDefault();
//     if (!supportData.name || !supportData.email || !supportData.issue) {
//       toast.error('Please fill all fields');
//       return;
//     }
//     sendEmail('template_oyby80g', supportData);
//     setSupportData({ name: '', email: '', issue: '' });
//   };

//   const handleFeedbackSubmit = (e) => {
//     e.preventDefault();
//     if (!feedbackData.name || !feedbackData.email || feedbackData.rating === 0) {
//       toast.error('Please fill all required fields');
//       return;
//     }
//     sendEmail('template_p1r8g5o', feedbackData);
//     setFeedbackData({ name: '', email: '', rating: 0, comments: '' });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
//       <div className="bg-white shadow-xl rounded-2xl w-full max-w-xl p-8">
//         {/* Tabs */}
//         <div className="flex justify-center mb-6">
//           <button
//             onClick={() => setActiveTab('support')}
//             className={`px-4 py-2 rounded-t-lg font-semibold transition-all duration-300 ${
//               activeTab === 'support'
//                 ? 'bg-green-500 text-white'
//                 : 'bg-gray-200 text-gray-700 hover:scale-105'
//             }`}
//           >
//             Support
//           </button>
//           <button
//             onClick={() => setActiveTab('feedback')}
//             className={`px-4 py-2 rounded-t-lg font-semibold transition-all duration-300 ${
//               activeTab === 'feedback'
//                 ? 'bg-green-500 text-white'
//                 : 'bg-gray-200 text-gray-700 hover:scale-105'
//             }`}
//           >
//             Feedback
//           </button>
//         </div>

//         {/* Support Form */}
//         {activeTab === 'support' && (
//           <form onSubmit={handleSupportSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={supportData.name}
//               onChange={handleSupportChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-transform duration-300 transform focus:scale-105"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={supportData.email}
//               onChange={handleSupportChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-transform duration-300 transform focus:scale-105"
//             />
//             <textarea
//               name="issue"
//               rows="4"
//               placeholder="Describe your issue"
//               value={supportData.issue}
//               onChange={handleSupportChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-transform duration-300 transform focus:scale-105"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-green-600 hover:scale-105 transition-transform duration-300"
//             >
//               Submit Support Request
//             </button>
//           </form>
//         )}

//         {/* Feedback Form */}
//         {activeTab === 'feedback' && (
//           <form onSubmit={handleFeedbackSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={feedbackData.name}
//               onChange={handleFeedbackChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-transform duration-300 transform focus:scale-105"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={feedbackData.email}
//               onChange={handleFeedbackChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-transform duration-300 transform focus:scale-105"
//             />
//             <div className="flex items-center space-x-2">
//               <label className="font-medium">Rating:</label>
//               {[1, 2, 3, 4, 5].map((num) => (
//                 <button
//                   key={num}
//                   type="button"
//                   onClick={() => setFeedbackData({ ...feedbackData, rating: num })}
//                   className={`px-3 py-1 rounded-full transition-transform duration-300 transform ${
//                     feedbackData.rating >= num
//                       ? 'bg-green-500 text-white scale-110'
//                       : 'bg-gray-200 text-gray-700 hover:scale-105'
//                   }`}
//                 >
//                   {num}
//                 </button>
//               ))}
//             </div>
//             <textarea
//               name="comments"
//               rows="3"
//               placeholder="Additional comments (optional)"
//               value={feedbackData.comments}
//               onChange={handleFeedbackChange}
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-transform duration-300 transform focus:scale-105"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-green-600 hover:scale-105 transition-transform duration-300"
//             >
//               Submit Feedback
//             </button>
//           </form>
//         )}
//       </div>

//       <ToastContainer />
//     </div>
//   );
// };

// export default SupportFeedback;


import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const SupportFeedback = () => {
  const [activeTab, setActiveTab] = useState('support'); // support or feedback

  const [supportData, setSupportData] = useState({
    name: '',
    email: '',
    issue: '',
  });

  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    rating: 0,
    comments: '',
  });

  // 🔥 Popup State
  const [showPopup, setShowPopup] = useState(false);

  const handleSupportChange = (e) => {
    const { name, value } = e.target;
    setSupportData({ ...supportData, [name]: value });
  };

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({ ...feedbackData, [name]: value });
  };

  // 🔥 SEND EMAIL with POPUP
  const sendEmail = async (templateId, data) => {
    try {
      await emailjs.send(
        'service_hderd6w',        // your service ID
        templateId,               // dynamic template ID
        data,
        'A7Pd8dglq_29APzOa'    // 🔥 replace with your real EmailJS public key
      );

      toast.success('Submitted successfully!');
      setShowPopup(true); // 🔥 show popup

    } catch (error) {
      console.error(error);
      toast.error('Failed to submit. Please try again.');
    }
  };

  const handleSupportSubmit = (e) => {
    e.preventDefault();

    if (!supportData.name || !supportData.email || !supportData.issue) {
      toast.error('Please fill all fields');
      return;
    }

    sendEmail('template_oyby80g', supportData); // 🔥 replace with your real Template ID
    setSupportData({ name: '', email: '', issue: '' });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    if (!feedbackData.name || !feedbackData.email || feedbackData.rating === 0) {
      toast.error('Please fill all required fields');
      return;
    }

    sendEmail('template_p1r8g5o', feedbackData); // 🔥 replace with your real Template ID
    setFeedbackData({ name: '', email: '', rating: 0, comments: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-xl p-8">

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab('support')}
            className={`px-4 py-2 rounded-t-lg font-semibold transition-all duration-300 ${
              activeTab === 'support'
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:scale-105'
            }`}
          >
            Support
          </button>

          <button
            onClick={() => setActiveTab('feedback')}
            className={`px-4 py-2 rounded-t-lg font-semibold transition-all duration-300 ${
              activeTab === 'feedback'
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:scale-105'
            }`}
          >
            Feedback
          </button>
        </div>

        {/* Support Form */}
        {activeTab === 'support' && (
          <form onSubmit={handleSupportSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={supportData.name}
              onChange={handleSupportChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={supportData.email}
              onChange={handleSupportChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
            />

            <textarea
              name="issue"
              rows="4"
              placeholder="Describe your issue"
              value={supportData.issue}
              onChange={handleSupportChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-green-600"
            >
              Submit Support Request
            </button>
          </form>
        )}

        {/* Feedback Form */}
        {activeTab === 'feedback' && (
          <form onSubmit={handleFeedbackSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={feedbackData.name}
              onChange={handleFeedbackChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={feedbackData.email}
              onChange={handleFeedbackChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
            />

            {/* Rating Buttons */}
            <div className="flex items-center space-x-2">
              <label className="font-medium">Rating:</label>
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setFeedbackData({ ...feedbackData, rating: num })}
                  className={`px-3 py-1 rounded-full ${
                    feedbackData.rating >= num
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            <textarea
              name="comments"
              rows="3"
              placeholder="Additional comments (optional)"
              value={feedbackData.comments}
              onChange={handleFeedbackChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg font-bold hover:bg-green-600"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>

      {/* 🔥 POPUP SUCCESS MESSAGE */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-80 text-center">
            <h2 className="text-xl font-bold text-green-600 mb-2">Success!</h2>
            <p className="text-gray-700 mb-4">
              Your message has been sent successfully.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default SupportFeedback;
