import Button from "./Button";

const Hero = () => {
    return(
        <div className="w-full h-96 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">Marcus Pizza</h1>
            <div className="flex flex-col md:flex-row">
                <Button text="Order Now"/>
            </div>
        </div>
    )
}
export default Hero;