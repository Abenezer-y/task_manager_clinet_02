import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavigationComponent from './components/navigationBar'
// import PostComponent from './components/post'
// import NewTask from './components/newTask'
import 'bootstrap/dist/css/bootstrap.css'
import {HashRouter as Router} from "react-router-dom";

ReactDOM.render(
  <Router>
    <NavigationComponent/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
