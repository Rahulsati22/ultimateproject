import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Layout/Header';
import Courses from './components/Courses/Courses';
import './App.css'
import Footer from './components/Layout/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request'
import About from './components/About/About';
import Subscribe from './components/Payment/Subscribe';
import PaymentSuccess from './components/Payment/PaymentSuccess';
import PaymentFail from './components/Payment/PaymentFail';
import NotFound from './components/Layout/NotFound';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile'
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import DashBoard from './components/Admin/DashBoard';
import CreateCourse from './components/Admin/CreateCourse';
import Users from './components/Admin/Users';
import AdminCourses from './components/Admin/AdminCourses';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast'
import { getMyProfile } from './redux/Actions/user';
import { ProtectedRoute } from 'protected-route-react'
import Loader from './components/Layout/Loader';
function App() {
  const { isAuthenticated, user, error, message, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError"
      })
    }

    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage"
      })
    }
  }, [dispatch, error, message])

  useEffect(() => {
    dispatch(getMyProfile())
  }, [dispatch])
  return (
    <Router>
      {
        loading && !user ? (<Loader />) : (
          <>
            <Header isAuthenticated={isAuthenticated} user={user} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/courses' element={<Courses />} />
              <Route path='/login' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/profile'><Login /></ProtectedRoute>} />
              <Route path='/register' element={<Register />} />
              <Route path='/forgetpassword' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/profile'><ForgetPassword /></ProtectedRoute> } />
              <Route path='/resetpassword/:token' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/profile'><ResetPassword /></ProtectedRoute>} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/request' element={<Request />} />
              <Route path='/about' element={<About />} />
              <Route path='/subscribe' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Subscribe user={user} /></ProtectedRoute>} />
              <Route path='/paymentsuccess' element={<PaymentSuccess />} />
              <Route path='/paymentfail' element={<PaymentFail />} />
              <Route path='/course/:id' element={<CoursePage />} />
              <Route path='/profile' element={<ProtectedRoute isAuthenticated={isAuthenticated}> <Profile user={user}/></ProtectedRoute>} />
              <Route path='/changepassword' element={<ProtectedRoute isAuthenticated={isAuthenticated}><ChangePassword /></ProtectedRoute>} />
              <Route path='/updateprofile' element={<ProtectedRoute isAuthenticated={isAuthenticated}><UpdateProfile /></ProtectedRoute>} />
              <Route path='/admin/dashboard' element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user.role === 'admin'}><DashBoard /></ProtectedRoute>} />
              <Route path='/admin/courses' element={<AdminCourses />} />
              <Route path='/admin/createcourse' element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user.role === 'admin'}><CreateCourse /></ProtectedRoute>} />
              <Route path='/admin/users' element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user.role === 'admin'}><Users /></ProtectedRoute>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
            <Toaster />
          </>
        )
      }
    </Router>
  );
}

export default App;
