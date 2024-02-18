import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accomodate from './chapter_07/Accomodate';
import ConfirmButton from './chapter_08/ConfirmButton3';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';

ReactDOM.render(
  <React.StrictMode>
    <AttendanceBook />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
