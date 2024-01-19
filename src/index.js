import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import { Store } from '@reduxjs/toolkit';
// import { Store } from '@reduxjs/toolkit';
import { store } from "./redux/Store";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import { Toast, ToastContainer } from "react-toastify/dist/components";
// import {Toaster} from 'react-hot-toaster'

// import { HotToastProvider } from 'react-hot-toast';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
  <BrowserRouter>
    <Provider store={store}>
      {" "}
      <App />
     {/* <Toaster/> */}
      <Toaster></Toaster>
      
    </Provider>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
