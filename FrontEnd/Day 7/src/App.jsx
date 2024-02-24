import { Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/user/Home';
import About from './pages/LandingPage/About';
import Dashboard from './pages/admin/Dashboard';
// import Userinfo from './pages/admin/Userinfo';
import Contact from "./pages/LandingPage/Contact"
import Home from './pages/LandingPage/HomePage';
import { lazy } from 'react';
import LazyLayout from './components/ui/LazyLayout';
import UserDetails from './pages/AdminDashBoard/UserDetails';
import ViewJobs from './pages/AdminDashBoard/Job';
import Feedback from './pages/AdminDashBoard/Feedback';
import CreateJob from './pages/AdminDashBoard/CreateJob';
const LazyLogin = lazy (() => import ('./pages/auth/Login'))
const LazyRegister = lazy (() => import ('./pages/auth/Register'))
const LazyHome = lazy (() => import ('./pages/user/Home'))
const LazyAbout = lazy (() => import ('./pages/LandingPage/About'))
const LazyDashboard = lazy (() => import ('./pages/admin/Dashboard'))
const LazyUserinfo = lazy (() => import ('./pages/admin/Userinfo'))
function App() {
 

  return (
    <Routes>
      <Route path="/" element = {<Navigate to="/login"/>}/>
      <Route path="/login" element={<LazyLayout component={LazyLogin}/>}/>
      <Route path="/register" element={<LazyLayout component={LazyRegister}/>}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<LazyLayout component={LazyAbout}/>}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/userinfo" element={<LazyUserinfo/>}/>
  <Route path="/userdetails" element={<UserDetails/>}/>
  <Route path="/job" element={<ViewJobs/>}/>
  <Route path="/feedback" element={<Feedback/>}/>
  <Route path="/createjob" element={<CreateJob/>}/>
  <Route path="/userdetails" element={<UserDetails/>}/>
    </Routes>
  )
}

export default App
