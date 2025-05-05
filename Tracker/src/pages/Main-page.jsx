import ToolBar from "../components/ToolBar";
import "../styles/Main-page.css";

function MainPage({ isDarkTheme }) {
  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <h2 className="header">Your Family expenseses</h2>
      <ToolBar isDarkTheme={isDarkTheme} />{" "}
    </div>
  );
}
export default MainPage;
