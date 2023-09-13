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




const TestsList = () => {

  const dispatch = useDispatch()
    const isLoading = useSelector(state => state.tests.isLoading)
    const tests = useSelector(testById)
    const { id } = useParams();
    console.log(id);

  useEffect(() => {
    dispatch(fetchTestById(id))
  }, [dispatch])
  
  return (
    <PhoneBookContainer style={

      {marginTop:'0px',}
      
    } >
      
          <h1>Test Details</h1>
          <p>{tests.testName}</p>
         <ul>
              {tests.test.map((test) => {
                  return <li key={test.question}>
                      {test.question}
                      {test.correctAnswer}
                      {test.incorrectAnswers}
                  </li>
              }
                  )}
        </ul>
      
      
        <ToastContainer
          autoClose={3000}
          position="top-center"
          theme="colored"
/>
      </PhoneBookContainer>
      
    );
}



export default TestsList