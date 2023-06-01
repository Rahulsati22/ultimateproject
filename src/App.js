import React from 'react';
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
function App() {
  // window.addEventListener("contextmenu", (e) => {
  //   e.preventDefault();
  // })
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/request' element={<Request />} />
        <Route path='/about' element={<About />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/paymentsuccess' element={<PaymentSuccess />} />
        <Route path='/paymentfail' element={<PaymentFail />} />
        <Route path='/course/:id' element={<CoursePage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path='/updateprofile' element={<UpdateProfile />} />
        <Route path='/admin/dashboard' element={<DashBoard />} />
        <Route path='/admin/courses' element={<AdminCourses />} />
        <Route path='/admin/createcourse' element={<CreateCourse />} />
        <Route path='/admin/users' element={<Users />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
