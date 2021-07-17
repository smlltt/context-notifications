import { useToastDispatchContext } from "../context/ToastContext";
import { Color } from "@material-ui/lab/Alert";

export const useToast = () => {
  const dispatch = useToastDispatchContext();
  const toast = (color: Color, message: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    // @ts-ignore
    dispatch({
      type: "ADD_TOAST",
      toast: {
        color,
        message,
        id,
        key: id,
      },
    });
  };
  return toast;
};
