import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TestsContainer } from "../components/App/App.styled";
import { fetchTests } from "../redux/tests/operations";
import { useEffect } from "react";
import { Filter } from "../components/Filter/Filter";
import { useSelector, useDispatch } from "react-redux";
import { TestList } from "../components/TestList/TestList";
import { getTests, getFilter } from "../redux/tests/selectors";

const TestsList = () => {
  const dispatch = useDispatch();

  const tests = useSelector(getTests);
  const filtered = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizeFilter = filtered.toLowerCase();

    return tests.filter((test) =>
      test.testName.toLowerCase().includes(normalizeFilter)
    );
  };

  useEffect(() => {
    dispatch(fetchTests());
  }, [dispatch]);

  return (
    <TestsContainer style={{ marginTop: "0px" }}>
      <h1>Test List</h1>
      <Filter />

      <ul>
        {getFilteredContacts().map((test) => (
          <TestList key={test._id} testItem={test} />
        ))}
      </ul>

      <ToastContainer autoClose={3000} position="top-center" theme="colored" />
    </TestsContainer>
  );
};

export default TestsList;
