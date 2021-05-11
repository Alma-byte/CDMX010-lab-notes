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
      <div className="cointainer-btn">

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Note" exact>
            <Note />
          </Route>
          <Route path="/NoteEdit" exact>
            <NoteEdit db={db} />
          </Route>
          <Route path="/NoteEdit/:id">
            <NoteEdit db={db} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


