const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-orange font-bold rounded-full px-6 py-4 hover:bg-darkorange transition duration-200 cursor-pointer">
      <p>{text}</p>
    </button>
  );
};

export default Button;
