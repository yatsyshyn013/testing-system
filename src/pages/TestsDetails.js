import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhoneBookContainer } from '../components/App/App.styled';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { fetchTestById } from '../redux/tests/operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTests, testById} from '../redux/tests/selectors';
import { StyledLinks } from "../components/SharedLayout/SharedLayout.styled"
// import { Loader } from 'components/Loader/Loader';
// import { ThreeDots } from "react-loader-spinner";
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom";
import Quiz from '../components/Quiz/Quiz';




const TestsList = () => {

  const dispatch = useDispatch()
    const isLoading = useSelector(state => state.tests.isLoading)
    const tests = useSelector(testById)
    const { id } = useParams();
    console.log(id);

  

  function shuffleAnswers(question) {
    const unshuffledAnswers = [
      question.correctAnswer,
      ...question.incorrectAnswers,
    ];
    return unshuffledAnswers
      .map(answer => ({ sort: Math.random(), value: answer }))
      .sort((a, b) => a.sort - b.sort)
      .map((obj) => obj.value);
  }

  useEffect(() => {
    dispatch(fetchTestById(id))
    
  }, [dispatch, id])
  
  return (
    <PhoneBookContainer style={

      {marginTop:'0px',}
      
    } >
      
          <h1>Test Details</h1>
      <p>{tests.testName}</p>
      <div>Now showing test with id - {id}</div>
    <div><Quiz/></div>
      {/* <ul>
              {tests.test.map((item) => {
                  return <li key={item._id}>
                      {item.question}
                      {item.correctAnswer}
                      {item.incorrectAnswers}
                  </li>
              }
                  )}
        </ul> */}
      
      
        <ToastContainer
          autoClose={3000}
          position="top-center"
          theme="colored"
/>
      </PhoneBookContainer>
      
    );
}



export default TestsList