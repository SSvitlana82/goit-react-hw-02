import React from "react";
import style from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetReviews }) => {
  return (
    <div className={style.btn}>
      <button
        className={style.btnDescrip}
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={style.btnDescrip}
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={style.btnDescrip}
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={style.btnDescrip} onClick={resetReviews}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
