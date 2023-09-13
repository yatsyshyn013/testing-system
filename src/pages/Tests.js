
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PhoneBookContainer } from '../components/App/App.styled';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { fetchTests } from '../redux/tests/operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Loader } from 'components/Loader/Loader';
// import { ThreeDots } from "react-loader-spinner";
import CircularProgress from '@mui/material/CircularProgress';




const Tests = () => {

  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.tests.isLoading)

  useEffect(() => {
    dispatch(fetchTests())
  }, [dispatch])
  
  return (
    <PhoneBookContainer style={

      {marginTop:'0px',}
      
    } >
      
        <h1>Create your test</h1>
        <ContactForm/>
        
      <h2>Tests</h2>
      <Filter />
      
    {isLoading &&     <CircularProgress style={{marginTop:'20px', marginLeft: '20px'}}/>}
      {!isLoading && <>
        
      
      <ContactList /></>}
      
      
        <ToastContainer
          autoClose={3000}
          position="top-center"
          theme="colored"
/>
      </PhoneBookContainer>
      
    );
}



export default Tests