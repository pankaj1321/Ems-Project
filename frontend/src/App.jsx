import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from '../components/Home';
import Footer from '../components/Footer'
import Empolye from "../components/Empolye";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header / Hero Section */}
      <Home />

      {/* Employee Form + Table */}
      <Empolye />

      {/* Footer */}
      <Footer />

      {/* Toast Notification Container */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;

