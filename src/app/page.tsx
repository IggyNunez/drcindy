import { client } from "@/sanity/client";
import {
  heroQuery,
  testimonialsSectionQuery,
  testimonialsQuery,
  aboutQuery,
  booksSectionQuery,
  booksQuery,
  workTogetherQuery,
  bookSpeakingQuery,
  siteSettingsQuery,
} from "@/sanity/queries";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import AboutDrCindy from "@/components/AboutDrCindy";
import AwardWinningBooks from "@/components/AwardWinningBooks";
import WorkTogether from "@/components/WorkTogether";
import BookDrCindy from "@/components/BookDrCindy";
import Footer from "@/components/Footer";

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default async function Home() {
  const [
    hero,
    testimonialsSection,
    testimonials,
    about,
    booksSection,
    books,
    workTogether,
    bookSpeaking,
    siteSettings,
  ] = await Promise.all([
    client.fetch(heroQuery),
    client.fetch(testimonialsSectionQuery),
    client.fetch(testimonialsQuery),
    client.fetch(aboutQuery),
    client.fetch(booksSectionQuery),
    client.fetch(booksQuery),
    client.fetch(workTogetherQuery),
    client.fetch(bookSpeakingQuery),
    client.fetch(siteSettingsQuery),
  ]);

  return (
    <>
      <Header data={siteSettings} />
      <main className="relative">
        <Hero data={hero} />
        <Testimonials
          sectionData={testimonialsSection}
          testimonials={testimonials}
        />
        <AboutDrCindy data={about} />
        <AwardWinningBooks sectionData={booksSection} books={books} />
        <WorkTogether data={workTogether} />
        <BookDrCindy data={bookSpeaking} />
      </main>
      <Footer data={siteSettings} />
    </>
  );
}
