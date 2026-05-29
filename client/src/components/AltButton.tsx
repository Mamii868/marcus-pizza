const AltButton = ({ text }: { text: string }) => {
  return (
    <button className="border-green-600 font-bold rounded-full px-6 py-4 hover:bg-green-600 transition duration-200 cursor-pointer">
      <p>{text}</p>
    </button>
  );
};

export default AltButton;
