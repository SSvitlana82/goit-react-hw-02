import React from "react";

const Feedback = ({ good, bad, neutral, total }) => {
  return (
    <div>
      <p>Good:{good}</p>
      <p>Bad:{bad}</p>
      <p>Neutral:{neutral}</p>
      <p>Total: {total}</p>
      <p>Positive:</p>
    </div>
  );
};

export default Feedback;
