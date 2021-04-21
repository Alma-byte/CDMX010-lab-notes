import './App.css';
import React from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route,
 } from "react-router-dom";
 import Home from './Pages/Homee';
 import Note from './Pages/Notee';
 import NoteEdit from './Pages/NoteEdit';
 import { db } from './firebase'

function App() {
  return (
   <Router>

     <Switch>
       <Route path="/Note">
         <Note />
       </Route>
       <Route path="/NoteEdit">
         <NoteEdit db={db}/>
       </Route>
       <Route path="/">
         <Home />
       </Route>
     </Switch>

 </Router>
  );
}

export default App;


