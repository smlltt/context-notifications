import React from "react";
import Toast from "../Toast";
import { useToastStateContext } from "../../context/ToastContext";

const ToastContainer = () => {
  const { toasts } = useToastStateContext();
  console.log(`toast state context: ${toasts}`);

  return (
    <div>
      {toasts &&
        toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            color={toast.color}
            message={toast.message}
          />
        ))}
    </div>
  );
};

export default ToastContainer;
