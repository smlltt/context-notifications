import React from "react";
import Toast from "../Toast";
import { useToastStateContext } from "../../context/ToastContext";
import { ToastsWrapper } from "./styles";

const ToastContainer = () => {
  const { toasts } = useToastStateContext();
  console.log(`toast state context: ${toasts}`);

  return (
    <ToastsWrapper>
      {toasts &&
        toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            color={toast.color}
            message={toast.message}
          />
        ))}
    </ToastsWrapper>
  );
};

export default ToastContainer;
