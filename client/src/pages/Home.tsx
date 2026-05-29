import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="relative w-full h-full text-white">
      {/* Centers the hero stuff so it looks better */}
      <div className="absolute top-0 left-0 w-full h-16">
        <NavBar />
      </div>

      <Hero />
    </div>
  );
};
export default Home;
