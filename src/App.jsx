import React from 'react';
import Taskbar from "./components/Taskbar"
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Gettasks from "./components/Gettasks"
import ChangeBox from './components/UpdateBox';

function App() {
  return (
    <Router>
   <Taskbar />
  <Routes>
    <Route path='/' element={<Gettasks/>}/>
    <Route path='/changebox/:id' element={<ChangeBox/>}/> 
   </Routes> 
   </Router>
  );
}

export default App;
