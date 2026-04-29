import Image from "next/image";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Book from "./components/book";

export default function Home() {
    return (
        <div className="w-screen">
            <Nav />
            <Hero />
            <Book />
        </div>
    );
}
