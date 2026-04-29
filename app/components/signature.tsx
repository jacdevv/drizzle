import Image from "next/image";
import Badge from "./badge";

const dishes = [
    {
        name: "Charred Octopus",
        description:
            "Smoky, tender octopus with roasted pepper relish.",
        price: "$24.00",
        image: "/signature-octopus.png",
    },
    {
        name: "Truffle Tagliatelle",
        description:
            "Fresh truffle, wild mushrooms, parmesan cream.",
        price: "$28.00",
        image: "/signature-tagliatelle.png",
    },
    {
        name: "Seared Atlantic Salmon",
        description:
            "Lentils, baby bok choy, and a lemon herb beurre blanc.",
        price: "$29.00",
        image: "/signature-salmon.png",
    },
];

function Signature() {
    return (
        <section className="mx-16 mt-24 flex flex-col items-center">
            <div className="flex flex-col items-center space-y-2">
                <Badge>
                    Our <span className="font-bold">Signatures</span>
                </Badge>
                <h1 className="text-center font-serif text-7xl font-medium">
                    Crafted for Your Senses
                </h1>
            </div>

            <div className="mt-10 grid w-full grid-cols-3 gap-8">
                {dishes.map((dish) => (
                    <article key={dish.name} className="space-y-3">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                            <Image
                                src={dish.image}
                                alt={dish.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-1">
                            <h2 className="font-serif text-2xl font-semibold text-foreground">
                                {dish.name}
                            </h2>
                            <p className="max-w-xs text-sm leading-5 text-foreground/70">
                                {dish.description}
                            </p>
                            <div className="flex items-center gap-2 pt-2 text-sm font-semibold">
                                <span className="text-[#BD3C2A]">
                                    {dish.price}
                                </span>
                                <span className="text-foreground/35">-</span>
                                <button className="text-[#BD3C2A]">
                                    View
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Signature;
