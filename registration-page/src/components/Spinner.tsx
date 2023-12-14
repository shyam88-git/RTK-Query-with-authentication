import React, { useState, useEffect } from "react";
import spinner from "../assets/spinnergif.jpeg";
import { useSelector } from "react-redux";
import { selectAuth } from "../features/authSlice";

function Spinner() {
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector(selectAuth);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); 

    
    return () => clearTimeout(timer);
  }, []); 

  if (isLoading) {
    return (
      <React.Fragment>
        <img src={spinner} alt="" />
      </React.Fragment>
    );
  }

  
  if (!token) {
   
    return <p>User not authorized</p>;
  }

  
  return (
    <React.Fragment>
      
    </React.Fragment>
  );
}

export default Spinner;
