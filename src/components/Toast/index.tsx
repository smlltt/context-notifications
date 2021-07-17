import React, { FC, useState } from "react";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { ToastProps } from "./types";

const Toast: FC<ToastProps> = ({ message, id, color }) => {
  const [open, setOpen] = useState(true);

  const Alert = (props: JSX.IntrinsicAttributes & AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  return (
    <div data-id={id}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert severity={color}>{message}</Alert>
      </Snackbar>
    </div>
  );
};

export default Toast;
