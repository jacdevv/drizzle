function Hero() {
    return (
        <section className="max-w-3xl mx-auto flex items-center flex-col my-10">
            <div className="flex flex-col items-center space-y-2">
                <Badge />
                <p className="text-8xl font-serif font-bold text-center">
                    Experience the <br /> Language of Taste
                </p>
            </div>
        </section>
    );
}

function Badge() {
    return (
        <div className="rounded-full border-foreground text-xs border px-2 py-1 w-fit">
            Made with <span className="font-bold">Love</span>, served with{" "}
            <span className="font-bold">Joy</span>
        </div>
    );
}

export default Hero;
