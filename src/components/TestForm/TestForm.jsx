import { useState } from "react";
import { TestComponent, AddTestBtn, TestsField } from "./TestForm.styled";
import { toast } from "react-toastify";
// import { getTests } from '../../redux/tests/selectors';
import { useDispatch } from "react-redux";
import { addTests } from "../../redux/tests/operations";

// import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { MdDoneAll } from "react-icons/md";
import { BiListPlus } from "react-icons/bi";

export const TestForm = () => {
  // const tests = useSelector(getTests);
  const dispatch = useDispatch();

  const [completeTest, setCompleteTest] = useState(false);
  const [testList, setTestList] = useState(false);
  const [testName, setTestName] = useState("");
  //   const [question, setQuestion] = useState("");
  //   const [correctAnswer, setCorrectAnswer] = useState("");
  //   const [incorrectAnswers, setIncorrectAnswers] = useState("");
  const [formData, setFormData] = useState({
    testName: "",
    questions: [],
  });
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    correctAnswer: "",
    incorrectAnswers: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "testName") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else {
      setCurrentQuestion((prevQuestion) => ({
        ...prevQuestion,
        [name]: value,
      }));
    }
  };

  const handleCompleteTest = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      questions: [...prevFormData.questions, currentQuestion],
    }));
    setCompleteTest(true);
    setTestList(true);
  };

  const handleAddQuestion = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      questions: [...prevFormData.questions, currentQuestion],
    }));
    setCurrentQuestion({
      question: "",
      correctAnswer: "",
      incorrectAnswers: [],
    });
    setCompleteTest(false);
    setTestList(true);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formattedData = {
      testName,
      test: formData.questions.map((q) => ({
        ...q,
        incorrectAnswers: q.incorrectAnswers
          .split(",")
          .map((ans) => ans.trim()),
      })),
    };

    dispatch(addTests(formattedData));
    setTestName("");
    setFormData({
      testName: "",
      questions: [],
    });
    setCurrentQuestion({
      question: "",
      correctAnswer: "",
      incorrectAnswers: [],
    });
    setCompleteTest(false);
    setTestList(false);
    // form.reset();
    // }
  }

  return (
    <TestComponent action="" onSubmit={handleSubmit}>
      <TestsField
        type="text"
        name="testName"
        value={testName}
        onChange={(e) => setTestName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        helperText="Please enter test name"
        id="outlined-basic"
        label="Test name"
        variant="outlined"
      />

      <TestsField
        inputProps={{ inputMode: "numeric", pattern: "[0-9/-]*" }}
        helperText="Please enter the question"
        type="text"
        name="question"
        value={currentQuestion.question}
        onChange={handleInputChange}
        required
        id="outlined-basic"
        label="Question"
        variant="outlined"
      />
      <TestsField
        inputProps={{ inputMode: "numeric", pattern: "[0-9/-]*" }}
        helperText="Please enter the correct answer"
        type="text"
        name="correctAnswer"
        value={currentQuestion.correctAnswer}
        onChange={handleInputChange}
        required
        id="outlined-basic"
        label="Correct answer"
        variant="outlined"
      />
      <TestsField
        inputProps={{ inputMode: "numeric", pattern: "[0-9/-]*" }}
        helperText="Please enter the incorrect answers"
        type="text"
        name="incorrectAnswers"
        value={currentQuestion.incorrectAnswers}
        onChange={handleInputChange}
        required
        id="outlined-basic"
        label="Incorrect answers"
        variant="outlined"
      />

      {}

      {completeTest === false && (
        <>
          <AddTestBtn
            variant="contained"
            type="button"
            onClick={handleAddQuestion}
            size="small"
          >
            Add another question
            <BiListPlus
              size={30}
              style={{ marginLeft: "5px", width: "20px" }}
            />
          </AddTestBtn>
          <AddTestBtn
            variant="contained"
            type="button"
            onClick={handleCompleteTest}
            size="small"
          >
            Complete test
            <MdDoneAll size={30} style={{ marginLeft: "5px", width: "20px" }} />
          </AddTestBtn>
        </>
      )}

      {completeTest === true && (
        <AddTestBtn variant="contained" type="submit" size="small">
          Add test to the list
          <BiListPlus size={30} style={{ marginLeft: "5px", width: "20px" }} />
        </AddTestBtn>
      )}

      {testList === true && (
        <div>
          <h2>Питання:</h2>
          <ul>
            {formData.questions.map((q, index) => (
              <li key={index}>
                {q.question} - {q.correctAnswer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </TestComponent>
  );
};
