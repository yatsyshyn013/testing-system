import { currentQuestionIndex } from "../../redux/tests/selectors"
import { useSelector } from "react-redux"
import { currentTestArray } from "../../redux/tests/selectors"


const Question = ({index, results}) => {

    // const questionIndex = useSelector(currentQuestionIndex);
    const currentTest = useSelector(currentTestArray);

    // const currentQuestion = currentTest[questionIndex];
    // const question =  currentQuestion.question
    const currentQuestion = currentTest[index];
    // console.log(currentQuestion);


    return <div>
        {currentTest.length>0 && <div>{currentQuestion.question}</div>}
        {/* {currentTest.map(item => <div>{item.question}</div>)} */}
        
    </div>
}

export default Question