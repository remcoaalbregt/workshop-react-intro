const LoadingIndicator = () =>
  <span>*</span>;

const Button = ({ children }) =>
  <button>{children}</button>;

render(<Button>Click me</Button>);
