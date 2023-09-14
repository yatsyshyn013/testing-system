import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TestsContainer } from "../components/App/App.styled";
import { TestForm } from "../components/TestForm/TestForm";
import { TestList } from "../components/TestList/TestList";
import { Filter } from "../components/Filter/Filter";
import { fetchTests } from "../redux/tests/operations";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

const Tests = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.tests.isLoading);

  useEffect(() => {
    dispatch(fetchTests());
  }, [dispatch]);

  return (
    <TestsContainer style={{ marginTop: "0px" }}>
      <h1>Create your test</h1>
      <TestForm />

      {/* <h2>Tests</h2> */}
      {/* <Filter /> */}

      {isLoading && (
        <CircularProgress style={{ marginTop: "20px", marginLeft: "20px" }} />
      )}
      {!isLoading && <>{/* <TestList /> */}</>}

      <ToastContainer autoClose={3000} position="top-center" theme="colored" />
    </TestsContainer>
  );
};

export default Tests;
