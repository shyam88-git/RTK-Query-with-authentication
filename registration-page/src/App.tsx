import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";

import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import { useAppDispatch } from "./redux/hooks";
import { useEffect } from "react";
import { setUser } from "./features/authSlice";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  return (
    <div className="auth">
      <BrowserRouter>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
      
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
