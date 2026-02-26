import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import AboutDrCindy from "@/components/AboutDrCindy";
import AwardWinningBooks from "@/components/AwardWinningBooks";
import WorkTogether from "@/components/WorkTogether";
import BookDrCindy from "@/components/BookDrCindy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Testimonials />
        <AboutDrCindy />
        <AwardWinningBooks />
        <WorkTogether />
        <BookDrCindy />
      </main>
      <Footer />
    </>
  );
}
