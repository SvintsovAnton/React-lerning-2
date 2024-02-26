import Feedback from "../components/Feedback/Feedback";
import { FeedbackProps } from "../components/Feedback/types";
import { useState } from "react";

function Homework21() {
  // Создаем state для likes
  const [likes, setLikes] = useState(0);
  // Создаем state для dislikes
  const [dislikes, setDislikes] = useState(0);

  // Создаем функцию, которая будет увеличивать likes на 1
  const onLike = () => {
    setLikes((prevValue) => {
      return prevValue + 1;
    });
  };

  // Создаем функцию, которая будет увеличивать dislikes на 1
  const onDislike = () => {
    setDislikes((prevValue) => prevValue + 1);
  };

  // Создаем функцию, которая будет сбрасывать все результаты
  const resetResults = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div>
      Homework 21
      <Feedback
        likes={likes}
        onLike={onLike}
        dislikes={dislikes}
        onDislike={onDislike}
        resetResults={resetResults}
      />
    </div>
  );
}

export default Homework21;
