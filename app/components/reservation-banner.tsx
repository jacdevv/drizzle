import Image from "next/image";

function ReservationBanner() {
    return (
        <section className="mx-16 mt-16">
            <div className="relative min-h-72 overflow-hidden rounded-2xl bg-[#BD3C2A] px-14 py-10 text-background">
                <div className="relative z-10 max-w-xl">
                    <h1 className="font-serif text-6xl font-medium">
                        Your Table Awaits
                    </h1>
                    <p className="mt-4 max-w-md text-lg leading-7 text-background/85">
                        Reserve now for an unforgettable experience filled with
                        flavor, warmth, and joy.
                    </p>
                    <button className="mt-8 rounded-full bg-background px-8 py-4 text-sm font-bold uppercase text-foreground">
                        Reserve a Table
                    </button>
                </div>

                <div className="absolute bottom-0 right-12 top-0 w-[520px] opacity-45 mix-blend-multiply">
                    <Image
                        src="/reservation-table-sketch.png"
                        alt=""
                        fill
                        sizes="520px"
                        className="object-contain object-right"
                    />
                </div>
            </div>
        </section>
    );
}

export default ReservationBanner;
