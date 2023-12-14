import { ReactNode} from "react";

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const token = JSON.parse(localStorage.getItem("user") || "");

  

  if (!token.token) {
    return <Navigate to="/auth" />;
  } else {
    return <>{children}</>;
  }
};

export default PrivateRoute;
