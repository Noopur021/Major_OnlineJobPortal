
import './App.css';
import './pages/Landing'
import './css/landing.css'
import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import Profile from './pages/profile';

import Meeting from './Meeting';

function App() {
  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    <Route path="/home" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}></Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
