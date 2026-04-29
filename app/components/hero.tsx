import Badge from "./badge";

function Hero() {
    return (
        <section className="max-w-3xl mb-16 mx-auto flex items-center flex-col my-10">
            <div className="flex flex-col items-center space-y-1">
                <Badge>
                    Made with <span className="font-bold">Love</span>, served
                    with <span className="font-bold">Joy</span>
                </Badge>
                <p className="text-8xl font-serif font-medium text-center">
                    Experience the <br /> Language of Taste
                </p>
            </div>
        </section>
    );
}

export default Hero;
