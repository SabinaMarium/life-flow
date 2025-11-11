import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Campaign from "./components/Campaign";
import Impact from "./components/Impact";
import RatingStars from "./components/RatingStars";
import SignUp from "./components/SignUp"; 

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => setShowSignUp(true);
  const handleCloseSignUp = () => setShowSignUp(false);

  return (
    <div>
      {/* Navbar with sign up click handler */}
      <Navbar onSignUpClick={handleSignUpClick} />

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-full max-w-md">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={handleCloseSignUp}
            >
              ×
            </button>
            <SignUp />
          </div>
        </div>
      )}

     
      <Banner />
      <Campaign />
      <Impact />
      <RatingStars />
      <Footer />
    </div>
  );
}

export default App;
