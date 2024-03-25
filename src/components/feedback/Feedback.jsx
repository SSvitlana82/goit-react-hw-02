import style from "./Feedback.module.css";
const Feedback = ({ good, bad, neutral, total, positive }) => {
  return (
    <div className={style.feedBack}>
      <p>Good:{good}</p>
      <p>Bad:{bad}</p>
      <p>Neutral:{neutral}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive} %</p>
    </div>
  );
};

export default Feedback;
