

import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ThreeDots } from "react-loader-spinner";
import CircularProgress from '@mui/material/CircularProgress';

import { lazy } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import SharedLayout from '../SharedLayout/SharedLayout';
import { refreshUser } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { RestrictedRoute } from '../RestrictedRoute';
import { PrivateRoute } from '../PrivateRoute';

const Home = lazy(() => import("../../pages/Home"))
const Tests = lazy(() => import("../../pages/Tests"))
const TestsList = lazy(() => import("../../pages/TestsList"))
const TestsDetails = lazy(() => import("../../pages/TestsDetails"))
const Login = lazy(() => import("../../pages/Login"))
const Register = lazy(()=> import("../../pages/Register"))


export default function App() {

  const dispatch = useDispatch()
  const {isRefreshing} = useAuth()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  
  
  return isRefreshing
      ? <CircularProgress/>
      : (
        <Routes>
              <Route path='/' element={<SharedLayout/>}>
                <Route index element={<Home />} />
            <Route path='/register' element={
              <RestrictedRoute redirectTo="/tests" component={<Register />} />
                } />
            <Route path='/login' element={
              <RestrictedRoute redirectTo="/tests" component={<Login />} />
                } />
            <Route path='/tests' element={
              <PrivateRoute redirectTo="/login" component={<Tests />} />
            } />
          <Route path='/tests-list' element={<TestsList />} />
          <Route path='/tests-list/:id' element={<TestsDetails/>} />
        </Route>
        
              

            </Routes>
    
  
      
    );
}

