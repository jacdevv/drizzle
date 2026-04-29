import Nav from "./components/nav";
import Hero from "./components/hero";
import Book from "./components/book";
import About from "./components/about";
import Signature from "./components/signature";
import Testimonials from "./components/testimonials";
import ReservationBanner from "./components/reservation-banner";
import Footer from "./components/footer";

export default function Home() {
    return (
        <div className="w-screen">
            <Nav />
            <Hero />
            <Book />
            <About />
            <Signature />
            <Testimonials />
            <ReservationBanner />
            <Footer />
        </div>
    );
}
