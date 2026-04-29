"use client";

import {
    FacebookLogoIcon,
    InstagramLogoIcon,
    SparkleIcon,
} from "@phosphor-icons/react";

const columns = [
    {
        title: "Our Menu",
        links: [
            "Today's Specials",
            "Starters",
            "Main Courses",
            "Sides & Salads",
            "Desserts",
            "Beverages",
        ],
    },
    {
        title: "About Us",
        links: ["Our Story", "Our Philosophy", "The Chef", "Careers"],
    },
    {
        title: "Gallery",
        links: ["Our Space", "Events & Moments"],
    },
    {
        title: "Contact Us",
        links: ["Location", "Hours", "Reservations", "Private Events", "FAQs"],
    },
];

function Footer() {
    return (
        <footer className="mx-16 mt-8 border-t border-foreground/15 py-10">
            <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] gap-12">
                <div>
                    <p className="font-serif text-3xl font-bold text-foreground">
                        Drizzle.
                    </p>
                    <p className="mt-4 max-w-52 text-sm leading-5 text-foreground/70">
                        Made with love, served with joy. Thank you for being a
                        part of our story.
                    </p>
                    <div className="mt-6 flex items-center gap-5 text-foreground">
                        <FacebookLogoIcon size={24} weight="bold" />
                        <InstagramLogoIcon size={24} weight="bold" />
                        <SparkleIcon size={24} weight="bold" />
                    </div>
                </div>

                {columns.map((column) => (
                    <div key={column.title}>
                        <h2 className="text-sm font-bold uppercase text-foreground">
                            {column.title}
                        </h2>
                        <div className="mt-4 flex flex-col gap-1">
                            {column.links.map((link) => (
                                <p
                                    key={link}
                                    className="text-sm leading-5 text-foreground/65"
                                >
                                    {link}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 grid grid-cols-[1fr_auto_1fr] items-center text-xs text-foreground/45">
                <p>© 2026 Drizzle. All rights reserved.</p>
                <div className="flex items-center gap-8">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
