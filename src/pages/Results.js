import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { TestsContainer } from "../components/App/App.styled";

import { resultsCount } from "../redux/tests/testsSlice";

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
