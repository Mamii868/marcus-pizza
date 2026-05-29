import Button from "./Button";
import heroImage from "../assets/pizzaImage.jpg";

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img src={heroImage} alt="Hero" className="w-full h-full object-cover opacity-50" />
      </div>
      <h1 className="text-8xl font-bold mb-4 opacity-0 animate-fade-up">
        <span className="text-orange">Marcus</span> Pizza
      </h1>
      <div className="mb-4">
        <p className="text-lg mb-8 opacity-0 animate-fade-up">The best pizza in Dallas, TX.</p>
      </div>
      <div className="flex flex-col md:flex-row opacity-0 animate-fade-up">
        <Button>Order Now</Button>
      </div>
    </div>
  );
};
export default Hero;
