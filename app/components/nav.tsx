function Nav() {
    return (
        <nav className="space-y-2">
            <div className="grid h-12 w-screen grid-cols-[1fr_auto_1fr] items-center px-18 py-2">
                <div className="flex h-full items-center justify-between">
                    <p className="text-[#280302] font-medium">HOME</p>
                    <ItemSeperator />
                    <p className="text-[#280302] font-medium">OUR MENU</p>
                    <ItemSeperator />
                    <p className="text-[#280302] font-medium">ABOUT US</p>
                    <ItemSeperator />
                </div>

                <div className="px-10">
                    <p className="text-[#280302] font-serif text-4xl font-bold">
                        Drizzle.
                    </p>
                </div>

                <div className="flex h-full items-center justify-between">
                    <ItemSeperator />
                    <p className="text-[#280302] font-medium">GALLERY</p>
                    <ItemSeperator />
                    <p className="text-[#280302] font-medium">RESERVATIONS</p>
                    <ItemSeperator />
                    <p className="text-[#280302] font-medium">CONTACT</p>
                </div>
            </div>
            <div className="opacity-30 w-full h-px bg-linear-to-r from-transparent via-foreground to-transparent"></div>
        </nav>
    );
}

function ItemSeperator() {
    return (
        <div className="h-full w-px bg-linear-to-b from-transparent via-foreground to-transparent opacity-30" />
    );
}

export default Nav;
