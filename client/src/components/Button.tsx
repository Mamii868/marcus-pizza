const Button = ({ onClick, children }: { onClick?: () => void; children: React.ReactNode }) => {
  return (
    <button onClick={onClick} className="bg-orange font-bold rounded-full px-6 py-4 hover:bg-darkorange transition duration-200 cursor-pointer">
      {children}
    </button>
  );
};

export default Button;
