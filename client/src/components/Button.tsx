const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-green-600 font-bold rounded-full px-6 py-4 hover:bg-green-500 transition duration-200 cursor-pointer">
      <p>{text}</p>
    </button>
  );
};

export default Button;
