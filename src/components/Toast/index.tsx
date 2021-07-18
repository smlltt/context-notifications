import React, { FC } from "react";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { ToastProps } from "./types";
import { useToastDispatchContext } from "../../context/ToastContext";

const Toast: FC<ToastProps> = ({ message, id, color }) => {
  const dispatch = useToastDispatchContext();

  const Alert = (props: JSX.IntrinsicAttributes & AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  return (
    <div data-id={id}>
      <Alert
        severity={color}
        onClose={() => {
          // @ts-ignore
          dispatch({ type: "DELETE_TOAST", id });
        }}
      >
        {message}
      </Alert>
    </div>
  );
};

export default Toast;
