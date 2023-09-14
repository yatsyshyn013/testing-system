import { useSelector } from "react-redux";
import { currentTestArray } from "../../redux/tests/selectors";
import { shuffleAnswers } from "../../helpers/helpers";
import Answer from "../Answer/Answer";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { incrementCorrectAnswersCount } from "../../redux/tests/testsSlice";
import { currentAnswer } from "../../redux/tests/selectors";

const Question = ({ index }) => {
  const dispatch = useDispatch();

  const currentTestAnswer = useSelector(currentAnswer);
  const currentTest = useSelector(currentTestArray);

  const [answers, setAnswers] = useState([]);

  const currentQuestion = currentTest[index];

  useEffect(() => {
    if (currentQuestion !== undefined) {
      const currentAnswers = shuffleAnswers(currentQuestion);
      setAnswers(currentAnswers);
    }
  }, [currentQuestion]);

  const handleCorrectAnswer = (answer) => {
    dispatch(incrementCorrectAnswersCount(answer));
  };

  return (
    <div>
      {currentTest.length > 0 && (
        <div className="question">{currentQuestion.question}</div>
      )}

      {answers.length > 0 && (
        <div className="answers">
          {answers.map((answer, indexQuestion) => (
            <Answer
              answerText={answer}
              key={nanoid()}
              index={indexQuestion}
              onSelectAnswer={() => handleCorrectAnswer(answer)}
              currentAnswer={currentTestAnswer}
              correctAnswer={currentQuestion.correctAnswer}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Question;
