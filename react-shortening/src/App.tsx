import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UrlListView from "./Presentation/Url/UrlList/UrlListView";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <UrlListView />
    </div>
  );
}

export default App;
