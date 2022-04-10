import React from "react";
import Assignment from './Assignment'
import Lectures from './Lectures'
import Profile from "./Profile";
import Mainlayout from './Mainlayout'
import Quiz from "./Quiz";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
         <Routes>
         <Route path="/" element={<Mainlayout />}>
          <Route path="assignment" element={<Assignment />} />
          <Route path="lectures" element={<Lectures />} /> 
          <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="quiz" element={<Quiz />} /> 
        </Routes>
   </BrowserRouter>
  );
}

export default App;
