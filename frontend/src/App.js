import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import Questions from "./Questions/Questions";
import { Route } from 'react-router-dom'
import Question from "./Question/Question";
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" component={Questions}/>
        <Route exact path="/:questionId" component={Question} />
        <p>Work in progress</p>
      </div>
    );
  }
}

export default App;
