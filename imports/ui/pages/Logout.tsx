import { Meteor } from "meteor/meteor";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logout: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Meteor.logout();
    // Function to navigate after a delay
    const navigateAfterDelay = () => {
      // Replace '/target-page' with the actual path you want to navigate to
      navigate("/home");
    };

    // Set a timeout for 5 seconds (5000 milliseconds)
    const delayInMilliseconds = 5000;
    const timeoutId = setTimeout(navigateAfterDelay, delayInMilliseconds);

    // Clear the timeout if the component is unmounted before the delay completes
    return () => clearTimeout(timeoutId);
  }, [navigate]);
  return (
    <div>
      You have logged out successfully, redirecting you to the home page now.
    </div>
  );
};
