import { AlertProps } from "@material-ui/lab/Alert/Alert";

export interface ToastProps extends Pick<AlertProps, "color"> {
  key: number;
  id: number;
  message: string;
}
