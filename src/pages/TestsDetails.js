import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TestsContainer } from "../components/App/App.styled";
import { fetchTestById } from "../redux/tests/operations";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { testById } from "../redux/tests/selectors";
import { useParams } from "react-router-dom";
import Quiz from "../components/Quiz/Quiz";

const TestsList = () => {
  const dispatch = useDispatch();
  const tests = useSelector(testById);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchTestById(id));
  }, [dispatch, id]);

  return (
    <TestsContainer style={{ marginTop: "0px" }}>
      <h1>Test name: {tests.testName}</h1>

      <div>
        <Quiz />
      </div>

      <ToastContainer autoClose={3000} position="top-center" theme="colored" />
    </TestsContainer>
  );
};

export default TestsList;
