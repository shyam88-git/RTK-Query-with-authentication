import  { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../features/authSlice";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  
  const token = useSelector(selectAuth);

  
  if (!token.token) {
    
    return <Navigate to="/auth" />;
  } else {
    return <>{children}</>;
  }
};

export default PrivateRoute;
