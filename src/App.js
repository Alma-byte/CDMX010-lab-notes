import './App.css';
import React from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";
 import Home from './Pages/Homee';
 import Note from './Pages/Notee';
 import NoteEdit from './Pages/NoteEdit';


function App() {
  return (
   <Router>

     <Switch>
       <Route path="/Note">
         <Note />
       </Route>
       <Route path="/NoteEdit">
         <NoteEdit />
       </Route>
       <Route path="/">
         <Home />
       </Route>
     </Switch>

 </Router>
  );
}

export default App;


