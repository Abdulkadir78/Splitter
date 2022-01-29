interface CardProps {
  className?: string;
}

const Card: React.FunctionComponent<CardProps> = ({ children, className }) => {
  return <div className={`shadow-md rounded-2xl ${className}`}>{children}</div>;
};

export default Card;
