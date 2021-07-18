import React, { FC } from "react";
import { FormValues } from "./types";
import FormComponent from "./Form.component";
import { useToast } from "../../hooks/useToast";
import { useToastStateContext } from "../../context/ToastContext";

const Form: FC = () => {
  const toast = useToast();
  const { toasts } = useToastStateContext();
  const handleSubmit = (values: FormValues) => {
    console.log(values);
    if (toasts.length <= 2) {
      toast("success", "Message submitted successfully");
    }
  };

  return <FormComponent onSubmit={handleSubmit} />;
};

export default Form;
