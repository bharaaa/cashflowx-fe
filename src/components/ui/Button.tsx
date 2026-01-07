type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className = "", ...props }: Props) => {
  return <button {...props} className={`btn ${className}`} />;
};

export default Button;
