function Nav() {
    return (
        <nav>
            <div className="grid h-12 w-screen grid-cols-[1fr_auto_1fr] items-center px-18">
                <div className="flex h-full items-center justify-between">
                    <Item tab="HOME" />
                    <ItemSeperator />
                    <Item tab="OUR MENU" />
                    <ItemSeperator />
                    <Item tab="ABOUT US" />
                    <ItemSeperator />
                </div>

                <div className="px-10">
                    <p className="text-[#280302] font-serif text-4xl font-bold">
                        Drizzle.
                    </p>
                </div>

                <div className="flex h-full items-center justify-between">
                    <ItemSeperator />
                    <Item tab="GALLERY" />
                    <ItemSeperator />
                    <Item tab="RESERVATIONS" />
                    <ItemSeperator />
                    <Item tab="CONTACT" />
                </div>
            </div>

            <div className="h-px w-full bg-linear-to-r from-transparent via-foreground to-transparent opacity-40" />
        </nav>
    );
}

function Item({ tab }: { tab: string }) {
    return <p className="text-[#280302] text-sm font-semibold">{tab}</p>;
}

function ItemSeperator() {
    return (
        <div className="h-full w-px bg-linear-to-b from-transparent via-foreground to-transparent opacity-40" />
    );
}

export default Nav;
