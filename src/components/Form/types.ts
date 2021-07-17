export interface FormValues {
  email: string;
  password: string;
}

export interface FormComponentProps {
  onSubmit(values: FormValues): void;
}
