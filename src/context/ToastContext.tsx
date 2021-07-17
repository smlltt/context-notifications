import React, { createContext, useReducer, useContext } from "react";
import { InitialToastStateType } from "./types";
import { ToastProps } from "../components/Toast/types";

const ToastStateContext = createContext<InitialToastStateType>({ toasts: [] });
const ToastDispatchContext = createContext(null);

const ToastReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TOAST": {
      return {
        ...state,
        toasts: [...state.toasts, action.toast],
      };
    }
    case "DELETE_TOAST": {
      const updatedToasts = state.toasts.filter(
        (toast: ToastProps) => toast.id !== action.id
      );
      return {
        ...state,
        toasts: updatedToasts,
      };
    }
    default: {
      throw new Error("unhandled action");
    }
  }
};

export const ToastProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(ToastReducer, {
    toasts: [],
  });

  return (
    <ToastStateContext.Provider value={state}>
      {/*@ts-ignore*/}
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  );
};

export const useToastStateContext = () => useContext(ToastStateContext);
export const useToastDispatchContext = () => useContext(ToastDispatchContext);
