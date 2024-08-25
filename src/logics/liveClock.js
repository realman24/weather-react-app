import React from "react";
import Clock from "react-live-clock";

const LiveClock = () => {
  return (
    <>
      {/* <p>liveClock</p> */}
      <h1 className="clock">
        <Clock format="HH:mm:ss" interval={1000} ticking={true} />
      </h1>
    </>
  );
};

export default LiveClock;
