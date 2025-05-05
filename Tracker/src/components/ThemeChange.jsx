import "../styles/ThemeChange.css";
import { useState, useEffect } from "react";
function ThemeChange() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  useEffect(() => {
    const body = document.body;

    if (isOn) {
      body.classList.add("white");
    } else {
      body.classList.remove("white");
    }
  }, [isOn]);
  return (
    <>
      <div className="slider-switch-container" onClick={toggleSwitch}>
        <div className={`slider-switch-track ${isOn ? "on" : "off"}`}>
          <div className="slider-switch-thumb"></div>
        </div>
      </div>
    </>
  );
}

export default ThemeChange;
