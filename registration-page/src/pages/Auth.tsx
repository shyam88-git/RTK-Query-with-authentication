import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useLoginUserMutation } from "../service/authApi";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../features/authSlice";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Wrapper = styled.div`
  padding: 6rem 0;

  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  
  }

  .card-body {
    h2 {
      color: ${({ theme }) => theme.colors.text};
    }

    h3 {
      color: ${({ theme }) => theme.colors.black};
      margin-bottom: 20px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  input {
    font-size: 16px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    padding: 10px;
    margin-left: -100px;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin-left: -100px;
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    margin-top: 10px;
  }
`;

const Auth = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { firstName, lastName, email, password, confirmPassword } = formValue;
  const [showRegister, setShowRegister] = useState(false);
  const [
    loginUser,
    {
      data: loginData,
      isLoading: loginLoading,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
    },
  ] = useLoginUserMutation();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      if (email && password) {
        await loginUser({ email, password });
      } else {
        toast.error("Please fill all the input field");
      }
    } catch (error) {
      toast.error("Invalid username or password");
    }
  };

  const handleRegister = async () => {};

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success("Login successfully", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
      });
      dispatch(setUser({ email: loginData.email, token: loginData.token }));
      navigate("/dashboard");
    } else if (isLoginError) {
      toast.error("Invalid username and password");
      // Handle other error cases here
    }
  }, [isLoginSuccess, isLoginError, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login or registration logic here
    console.log(formValue);
  };

  const toggleForm = () => {
    setShowRegister(!showRegister);
  };

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h2>{!showRegister ? "Login" : "Register"}</h2>
              <h3>
                {!showRegister
                  ? "Please enter email and password"
                  : "Please enter user details"}
              </h3>
              <form onSubmit={handleSubmit}>
                {showRegister && (
                  <>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={handleChange}
                      required
                    />
                  </>
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                  required
                />
                {showRegister && (
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                  />
                )}
                {!showRegister ? (
                  <button type="submit" onClick={handleLogin}>
                    {loginLoading ? "Loading" : "Login"}
                  </button>
                ) : (
                  <button type="button" onClick={handleRegister}>
                    Register
                  </button>
                )}
              </form>

              <p onClick={toggleForm}>
                {!showRegister
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Sign in"}
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Auth;
