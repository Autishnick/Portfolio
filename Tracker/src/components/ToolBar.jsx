import "../styles/ToolBar.css";

function ToolBar() {
  return (
    <>
      <div className="tool-bar">
        <img
          className="prof-img"
          src="\src\assets\profile.png"
          alt="Profile image"
        ></img>
        <img
          className="prof-img"
          src="\src\assets\plus.png"
          alt="Add expence image"
        ></img>
        <img
          className="prof-img"
          src="\src\assets\diagram.png"
          alt="Diagrams"
        ></img>
        <img className="exit-img" src="\src\assets\exit.png" alt="Exit"></img>
      </div>
    </>
  );
}
export default ToolBar;
