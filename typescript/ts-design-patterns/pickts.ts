type ButtonProps = Pick<
  // @ts-ignore
  HTMLAttributes<HTMLButtonElement>,
  "onClick" | "onSubmit" | "className" | "onFocus"
>;

class LoggingButton extends React.Component<ButtonProps> {}
