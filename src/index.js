import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Store } from "@mui/icons-material";

// REDUX STORE-> globalized state
// ACTION
// const addToWatchList = () => {
//   return {
//     type: "ADD",
//   };
// };
// const removeForWatchList = () => {
//   return {
//     type: "REMOVE",
//   };
// };
// REDUCER
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "ADD":
//       return state.change;
//     case "REMOVE":
//       return state.change;
//   }
// };
// let store =createStore(counter)
// DISPATCH
// Store.dispatch(addToWatchList())

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
