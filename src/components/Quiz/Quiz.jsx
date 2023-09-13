import { currentQuestionIndex } from "../../redux/tests/selectors"
// import { useSelector } from "react-redux/es/hooks/useSelector"
import { currentTestArray } from "../../redux/tests/selectors"
import Question from "../Question/Question";
import { changeCurrentQuestionIndex } from "../../redux/tests/operations";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Quiz = () => {

    // const questionIndex = useSelector(currentQuestionIndex);
    const currentTest = useSelector(currentTestArray);
    const dispatch = useDispatch();
    const [questionIndex, setQuestionIndex] = useState(0)
    const [questionResults, setQuestionResults] = useState(false);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0)

    const showResults = questionIndex === currentTest.length - 1;
    

    function handleQuestionBtn(params) {
        if (showResults) {
            setQuestionResults(true)
            setQuestionIndex(questionIndex)
    } else {setQuestionIndex(questionIndex + 1)}
        // setQuestionIndex(questionIndex + 1)
    }

    function handleRestartBtn() {
        setQuestionIndex(0)
        setQuestionResults(false)
    }

    return <div>
        {questionResults && <div>
            <div>Congratulations</div>
            <div>
                <div>
                You have completed the test
                </div>
                <div>
                You've got {correctAnswersCount} of {currentTest.length} rigth
                </div>
                <button type="button" onClick={handleRestartBtn}>Restart</button>
            </div>
        </div>}
        {!questionResults &&
            <div>
                       <div>
            Question {questionIndex + 1}/{currentTest.length}
        </div>
        <Question index={questionIndex} results={questionResults} />
        <button type="button" onClick={handleQuestionBtn}>Next question</button>
        </div>}
     
    </div>
}

export default Quiz