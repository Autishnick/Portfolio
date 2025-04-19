import React, { useState, useEffect } from "react";
function Clock() {
  const [time, settime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      settime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let meridiane = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;

    return `${zerotime(hour)}:${zerotime(minute)}:${zerotime(
      second
    )} ${meridiane}`;
  }
  function zerotime(number) {
    return (number < 10 ? "0" : "") + number;
  }

  function formatData() {
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    return `${zerotime(day)}.${zerotime(month)}.${year}`;
  }
  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
      <br></br>
      <div className="date">
        <span>{formatData()}</span>
      </div>
    </div>
  );
}
export default Clock;
