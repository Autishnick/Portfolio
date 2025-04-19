import Clock from "./Clock";
import profileImage from "./assets/Profile-img.jpg";
import { useNavigate } from "react-router-dom";
const ToolBar = ({ children }) => {
  const navigate = useNavigate();
  function handleLogIn() {
    navigate("/login");
  }
  return (
    <>
      <div className="bar-container">
        <Clock />
        {children}
        <img
          onClick={handleLogIn}
          src={profileImage}
          className="profile-img"
          alt="Profile image"
        ></img>
      </div>
    </>
  );
};

export default ToolBar;
