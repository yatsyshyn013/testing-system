import { currentQuestionIndex } from "../../redux/tests/selectors";
import { currentTestArray } from "../../redux/tests/selectors";
import Question from "../Question/Question";
import { useSelector, useDispatch } from "react-redux";
import { nextQuestion } from "../../redux/tests/testsSlice";
import { results } from "../../redux/tests/selectors";
import { restart } from "../../redux/tests/testsSlice";
import { correctAnswersCount } from "../../redux/tests/selectors";

const Quiz = () => {
  const questionIndex = useSelector(currentQuestionIndex);
  const questionResults = useSelector(results);
  const correctAnswers = useSelector(correctAnswersCount);
  const currentTest = useSelector(currentTestArray);
  const dispatch = useDispatch();

  // const currentQuestion = currentTest[questionIndex];

  function handleQuestionBtn(params) {
    dispatch(nextQuestion());
  }

  function handleRestartBtn() {
    dispatch(restart());
  }

  return (
    <div className="quiz">
      {questionResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the test</div>
            <div>
              You've got {correctAnswers} of {currentTest.length} rigth
            </div>
            <button
              type="button"
              onClick={handleRestartBtn}
              className="next-button"
            >
              Restart
            </button>
          </div>
        </div>
      )}
      {!questionResults && (
        <div>
          <div className="score">
            Question {questionIndex + 1}/{currentTest.length}
          </div>
          <Question index={questionIndex} />
          <button
            type="button"
            onClick={handleQuestionBtn}
            className="next-button"
          >
            Next question
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
