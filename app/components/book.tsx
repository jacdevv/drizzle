"use client";
import { ArrowDownIcon } from "@phosphor-icons/react";
import Image from "next/image";

function Book() {
    return (
        <section className="relative">
            <div className="absolute left-1/2 z-10 aspect-square w-44 -translate-x-1/2 -translate-y-10 rounded-full bg-background p-2">
                <div className="w-full  h-full hover:scale-105 -space-y-10 grid place-items-center text-background text-center text-xl font-semibold bg-[#C03A2C] rounded-full">
                    <ArrowDownIcon size={32} />
                    <p>
                        RESERVE A <br /> TABLE
                    </p>
                </div>
            </div>
            <div className="h-[400px] overflow-hidden pt-8">
                <div className="relative h-full">
                    <Image
                        src="/restaurant.png"
                        alt="Restaurant dining room"
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </section>
    );
}

export default Book;
