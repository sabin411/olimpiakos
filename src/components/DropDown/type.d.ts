export type DropDownProps = {
  label: string;
  dropDownItems: {
    value: string;
    name: string;
  }[];
  containerStyle?: string;
  error?: FieldErrorsImpl<{
    [x: string]: any;
  }>;
  name: string;
  register?: any;
  errorMessage?: string;
};
