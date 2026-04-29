import Image from "next/image";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Book from "./components/book";
import About from "./components/about";

export default function Home() {
    return (
        <div className="w-screen">
            <Nav />
            <Hero />
            <Book />
            <About />
        </div>
    );
}
