import './App.css';
 import Content from './components/Content/Content';
 import Header from './components/Header/Header';
 import Candidate from './components/Candidate/Candidate';
 import Login from './components/Login';
 import Signup from './components/Signup';
  import {

     Routes,
     Route,

 } from "react-router-dom";

function App() {
  return (
    <>

       <Routes>
         <Route element={<Header/>} path="/Header" />
         <Route element={<Login/>} path="/" />
         <Route element={<Signup/>} path="/Signup" />
         <Route element={<Content/>} path="/Content" />
         <Route element={<Candidate/>} path="/Candidate"/>
       </Routes>



     </>


  );
}

export default App;
