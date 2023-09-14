import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { correctAnswersCount } from "../redux/tests/selectors";
import { currentTestArray } from "../redux/tests/selectors";
import { currentQuestionIndex } from "../redux/tests/selectors";
import { TestsContainer } from "../components/App/App.styled";
import { testById } from "../redux/tests/selectors";
import { resultsCount } from "../redux/tests/testsSlice";
import { testResults } from "../redux/tests/selectors";

const Results = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resultsCount());
  }, [dispatch]);

  return (
    <TestsContainer>
      <h1>Results</h1>
      <div>Test name: 3/6</div>
    </TestsContainer>
  );
};

export default Results;
