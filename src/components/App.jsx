import { useState } from "react";
import Description from "./description/Description";
import "./App.css";
import Options from "./options/Options";
import Feedback from "./feedback/Feedback";

function App() {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    const copy = { ...reviews };
    copy[feedbackType] += 1;

    setReviews(copy);
  };

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  return (
    <>
      <Description></Description>
      <Options updateFeedback={updateFeedback}></Options>
      <Feedback
        good={reviews.good}
        bad={reviews.bad}
        neutral={reviews.neutral}
        total={totalFeedback}
      ></Feedback>
    </>
  );
}

export default App;
