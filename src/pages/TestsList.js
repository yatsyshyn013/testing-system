import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhoneBookContainer } from '../components/App/App.styled';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { fetchTests } from '../redux/tests/operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTestById } from '../redux/tests/operations';
import { getTests } from '../redux/tests/selectors';
import { StyledLinks } from "../components/SharedLayout/SharedLayout.styled"
// import { Loader } from 'components/Loader/Loader';
// import { ThreeDots } from "react-loader-spinner";
import CircularProgress from '@mui/material/CircularProgress';




const TestsList = () => {

  const dispatch = useDispatch()
    const isLoading = useSelector(state => state.tests.isLoading)
    const tests = useSelector(getTests)

  useEffect(() => {
    dispatch(fetchTests())
  }, [dispatch])

  // function hanldeTestById(id) {
  //   fetchTestById(id)
  // }
  
  return (
    <PhoneBookContainer style={

      {marginTop:'0px',}
      
    } >
      
        <h1>Test List</h1>
          <ul>
              {tests.map((test) => {
                  return <StyledLinks to={`${test._id}`} ><li key={test._id}>{test.testName} </li></StyledLinks>
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