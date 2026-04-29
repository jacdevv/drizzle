import Badge from "./badge";

const testimonials = [
    {
        quote:
            "Flawless from start to finish. The flavors, the service, the ambience-unforgettable.",
        author: "Aisha P.",
    },
    {
        quote:
            "Drizzle is our go-to for special nights. Every time, it feels absolutely perfect.",
        author: "Daniel R.",
    },
    {
        quote:
            "A beautiful space with food that speaks for itself. Can't wait to return.",
        author: "Meera S.",
    },
];

function Testimonials() {
    return (
        <section className="mx-16 mt-24 flex flex-col items-center">
            <div className="flex flex-col items-center space-y-2">
                <Badge>Testimonials</Badge>
                <h1 className="text-center font-serif text-7xl font-medium">
                    Moments That Stay
                </h1>
            </div>

            <div className="mt-12 grid w-full grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <article
                        key={testimonial.author}
                        className={`flex flex-col items-center px-14 text-center ${
                            index > 0
                                ? "border-l border-foreground/20"
                                : ""
                        }`}
                    >
                        <p className="font-serif text-6xl leading-none text-[#BD3C2A]">
                            &ldquo;
                        </p>
                        <p className="mt-2 max-w-xs text-lg leading-7 text-foreground/80">
                            {testimonial.quote}
                        </p>
                        <p className="mt-8 text-base font-semibold text-foreground/70">
                            - {testimonial.author}
                        </p>
                        <p className="mt-5 text-xl tracking-[0.18em] text-[#BD3C2A]">
                            *****
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
