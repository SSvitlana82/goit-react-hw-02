import { useState, useEffect } from "react";
import Description from "./Description/Description.jsx";
import "./App.css";
import Options from "./Options/Options.jsx";
import Feedback from "./Feedback/Feedback.jsx";
import Notification from "./Notification/Notification.jsx";

function App() {
  const [reviews, setReviews] = useState(() => {
    const data = JSON.parse(localStorage.getItem("reviews"));
    return data || { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const updateFeedback = (feedbackType) => {
    const copyReviews = { ...reviews };
    copyReviews[feedbackType] += 1;
    setReviews(copyReviews);
  };

  const resetReviews = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const percentPozitiv = Math.round((reviews.good / totalFeedback) * 100);
  return (
    <>
      <Description></Description>
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetReviews={resetReviews}
      ></Options>
      {totalFeedback > 0 ? (
        <Feedback
          good={reviews.good}
          bad={reviews.bad}
          neutral={reviews.neutral}
          total={totalFeedback}
          positive={percentPozitiv}
        ></Feedback>
      ) : (
        <Notification message="No feedback yet"></Notification>
      )}
    </>
  );
}

export default App;
