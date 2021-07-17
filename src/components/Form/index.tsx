import React, { FC } from "react";
import { FormValues } from "./types";
import FormComponent from "./Form.component";
import { useToast } from "../../hooks/useToast";

const Form: FC = () => {
  const toast = useToast();
  const handleSubmit = (values: FormValues) => {
    console.log(values);
    toast("success", "Message submitted successfully");
  };

  return <FormComponent onSubmit={handleSubmit} />;
};

export default Form;
