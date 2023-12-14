import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, selectAuth } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 500px;
  height: 300px;

  text-align: center;
`;

const Heading = styled.h2`
  color: #333333;
  margin-bottom: 10px;
`;

const Name = styled.p`
  color: #555555;
  margin-bottom: 20px;
  text-align: center;
`;

const LogoutButton = styled.button`
  background-color: #ff6347;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Dashboard = () => {
  const { email } = useAppSelector(selectAuth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("User Logout Successfully");
    navigate("/auth");
  };
  return (
    <DashboardContainer>
      <Card>
        <Heading>Welcome to Dashboard</Heading>
        <Name>{`Email: ${email}`}</Name>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Card>
    </DashboardContainer>
  );
};

export default Dashboard;
