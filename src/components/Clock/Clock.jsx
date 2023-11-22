import React, { useState, useEffect } from "react";

const Clock = (props) => {
  const [time, setTime] = useState(null);

  const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  };

  const padZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className={props.class}>{time}</div>;
};

export default Clock;
