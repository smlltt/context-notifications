import React from "react";
import "./App.css";
import Form from "./components/Form";
import ToastContainer from "./components/ToastContainer";
import { ToastProvider } from "./context/ToastContext";

function App() {
  return (
    <ToastProvider>
      <Form />
      <ToastContainer />
    </ToastProvider>
  );
}

export default App;
