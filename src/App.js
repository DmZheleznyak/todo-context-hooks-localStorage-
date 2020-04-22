import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Tasks from './components/Tasks';
import DoneTasks from './components/DoneTasks';
import TaskContextProveder from './context/TaskContext';


function App() {
  return (
    <div className="App">
      <TaskContextProveder>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Tasks />
            </Route>
            <Route>
              <DoneTasks path='/donetasks' />
            </Route>
          </Switch>
        </Router>
      </TaskContextProveder>
    </div>
  );
}

export default App;
