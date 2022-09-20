export type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  containerStyle?: string;
};

export type SingleCommentProps = {
  avatar: string;
  text: string;
  timeStamp: Date;
  userName: string;
};
