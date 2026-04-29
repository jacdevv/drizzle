import Badge from "./badge";

function About() {
    return (
        <section className="mx-16 mt-24 flex justify-between items-center">
            <Left />
            <div className="rounded-2xl space-y-2">
                <img
                    src="/outside.jpg"
                    className="w-[500px] aspect-[4/3] rounded-2xl object-cover"
                />
            </div>
        </section>
    );
}

function Left() {
    return (
        <div className="space-y-4">
            <Badge>
                Know <span className="font-bold">about</span> us
            </Badge>
            <p className="text-7xl font-serif font-medium">
                Feel the atmosphere in the <br />
                moment while you dine
            </p>
            <button className="bg-[#BD3C2A] mt-8 text-white px-6 py-3 rounded-full text-background">
                READ OUR STORY
            </button>
        </div>
    );
}

export default About;
