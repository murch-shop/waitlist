import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Layout from "./components/Layout";
import reportWebVitals from './reportWebVitals';
import ReactGA from "react-ga";

ReactGA.initialize("G-8W0SL4P5CL", []);

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
