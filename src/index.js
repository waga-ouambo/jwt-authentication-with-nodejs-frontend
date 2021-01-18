import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



      axios.defaults.headers.common['auth-token']= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmY0NTVmMjBiMzNkNjE0ZjQ1MTJlZTIiLCJ1c2VyTmFtZSI6ImFiZWdhIiwiaWF0IjoxNjA5OTIxMTA5fQ.c-_yAYnEqmmNnzeeN9pomOdmA5QbL42n_v7xiouNdWc';
      axios.defaults.headers.common['agent']= navigator.userAgent; 
      

      axios.interceptors.request.use(request => {
        console.log(request);
        request.userIDD = 1548700;
        return request;
      }, error => {
        console.log(error);
        return Promise.reject(error);
      });

      axios.interceptors.response.use(response => {
        console.log(response);
        response.contact= 54551400;
        return response; 
      }, error => {
        console.log(error.message);
        return Promise.reject(error);
      });

      toast.configure({
        hideProgressBar: false,
        className: "toastage",
        autoClose: 5000,
      })



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
