import React from "react";
import "./App.css";
import Form from "./components/Form";
import ToastContainer from "./components/ToastContainer";
import { ToastProvider } from "./context/ToastContext";
import { AppWrapper, NotificationsBottomAlignment } from "./styles";

function App() {
  return (
    <ToastProvider>
      <AppWrapper>
        <Form />
        <NotificationsBottomAlignment>
          <ToastContainer />
        </NotificationsBottomAlignment>
      </AppWrapper>
    </ToastProvider>
  );
}

export default App;
