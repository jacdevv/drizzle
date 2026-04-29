"use client";
import { ArrowDownIcon } from "@phosphor-icons/react";

function Book() {
    return (
        <section className="relative">
            <div className="bg-background rounded-full p-2 w-44 aspect-square absolute left-1/2 -translate-x-1/2 -translate-y-10">
                <div className="w-full h-full -space-y-10 grid place-items-center text-background text-center text-xl font-semibold bg-[#C03A2C] rounded-full">
                    <ArrowDownIcon size={32} />
                    <p>
                        RESERVE A <br /> TABLE
                    </p>
                </div>
            </div>
            <div className="h-[400px] overflow-hidden pt-8">
                <img
                    src="/restaurant.png"
                    className="h-full w-full object-cover object-middle"
                />
            </div>
        </section>
    );
}

export default Book;
