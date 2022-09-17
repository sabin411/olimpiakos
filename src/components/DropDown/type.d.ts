export type DropDownProps = {
  label: string;
  dropDownItems: {
    value: string;
    name: string;
  }[];
  containerStyle?: string;
  onChange: (value: string) => void;
  name: string;
};
