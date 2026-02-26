"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Dr. Cindy's session was the highest rated at the whole conference.",
    body: "We all learned great tactics with immediate takeaways. Highly recommend!",
    name: "Kenneth R. Trepeta Esq.,",
    title: "President and Executive Director, RESPRO Conference",
    avatar: "/images/testimonial-1.png",
  },
  {
    quote: "Dr. Cindy is phenomenal",
    body: "and full of energy and knowledge. She's consistently one of our top-rated speakers, providing tools attendees apply instantly.",
    name: "Stacy Riddler,",
    title: "IAEE",
    avatar: "/images/testimonial-2.png",
  },
  {
    quote: "Dr. Cindy is a true inspiration",
    body: "who ignites a room, creates a safe environment, and facilitates manageable change. Her engaging style left us excited—'I can do this!'",
    name: "Stacey Barker,",
    title: "Vice President, Fidelity National Title of Florida, Inc.",
    avatar: "/images/testimonial-3.png",
  },
  {
    quote: "Dr. Cindy's session was the highest rated at the whole conference.",
    body: "We all learned great tactics with immediate takeaways. Highly recommend!",
    name: "Kenneth R. Trepeta Esq.,",
    title: "President and Executive Director, RESPRO Conference",
    avatar: "/images/testimonial-1.png",
  },
  {
    quote: "Dr. Cindy is phenomenal",
    body: "and full of energy and knowledge. She's consistently one of our top-rated speakers, providing tools attendees apply instantly.",
    name: "Stacy Riddler,",
    title: "IAEE",
    avatar: "/images/testimonial-2.png",
  },
  {
    quote: "Dr. Cindy is a true inspiration",
    body: "who ignites a room, creates a safe environment, and facilitates manageable change. Her engaging style left us excited—'I can do this!'",
    name: "Stacey Barker,",
    title: "Vice President, Fidelity National Title of Florida, Inc.",
    avatar: "/images/testimonial-3.png",
  },
];

function QuoteIcon() {
  return (
    <svg width="75" height="59" viewBox="0 0 75 59" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[40px] h-[32px] md:w-[55px] md:h-[43px] lg:w-[65px] lg:h-[51px] drop-shadow-[0_3px_6px_rgba(255,195,0,0.4)]">
      <path d="M18.4152 58.6143C14.9717 58.6143 12.1271 57.9406 9.88134 56.5932C7.63558 55.2457 5.76412 53.4491 4.26694 51.2033C2.76977 48.8078 1.64689 46.1129 0.898305 43.1186C0.299436 40.1242 0 37.4293 0 35.0339C0 27.6977 1.87147 20.9604 5.6144 14.822C9.50705 8.6836 15.4209 3.74293 23.3559 0L25.3771 4.04238C20.8856 5.9887 16.9929 8.98305 13.6991 13.0254C10.4054 17.0678 8.60875 21.185 8.30931 25.3771C8.00988 27.6229 8.15959 29.7189 8.75846 31.6652C11.4534 29.12 14.7472 27.8474 18.6398 27.8474C22.9816 27.8474 26.6497 29.2697 29.644 32.1144C32.6384 34.8093 34.1355 38.5522 34.1355 43.3432C34.1355 47.8347 32.5635 51.5028 29.4195 54.3474C26.4251 57.192 22.757 58.6143 18.4152 58.6143ZM59.2881 58.6143C55.8446 58.6143 52.9999 57.9406 50.7542 56.5932C48.5084 55.2457 46.6369 53.4491 45.1398 51.2033C43.6426 48.8078 42.5197 46.1129 41.7711 43.1186C41.1723 40.1242 40.8728 37.4293 40.8728 35.0339C40.8728 27.6977 42.7443 20.9604 46.4872 14.822C50.3799 8.6836 56.2937 3.74293 64.2287 0L66.2499 4.04238C61.7584 5.9887 57.8657 8.98305 54.572 13.0254C51.2782 17.0678 49.4816 21.185 49.1821 25.3771C48.8827 27.6229 49.0324 29.7189 49.6313 31.6652C52.3262 29.12 55.62 27.8474 59.5126 27.8474C63.8544 27.8474 67.5225 29.2697 70.5168 32.1144C73.5112 34.8093 75.0084 38.5522 75.0084 43.3432C75.0084 47.8347 73.4363 51.5028 70.2923 54.3474C67.2979 57.192 63.6299 58.6143 59.2881 58.6143Z" fill="#FFC300" />
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="relative h-full">
      {/* Quote icon - overlapping top-left corner of card */}
      <div className="absolute -top-[18px] md:-top-[22px] left-[20px] md:left-[30px] z-10">
        <QuoteIcon />
      </div>

      {/* Card */}
      <div
        className="relative rounded-[20px] md:rounded-[26px] border-[2px] md:border-[2.5px] border-[#cba465] bg-white/90 backdrop-blur-[17.5px] px-6 md:px-[32px] lg:px-[40px] pt-[50px] md:pt-[60px] pb-8 md:pb-[40px] h-full flex flex-col justify-between"
      >
        {/* Quote text */}
        <p
          className="text-black text-[16px] md:text-[16px] lg:text-[17px] leading-[26px] md:leading-[26px] lg:leading-[28px] mb-8 md:mb-10 text-left"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <span className="font-bold text-[16px] md:text-[17px] lg:text-[18px]">
            {testimonial.quote}
          </span>{" "}
          <span className="font-normal">{testimonial.body}</span>
        </p>

        {/* Author - inside the card */}
        <div className="flex items-center gap-3 mt-auto">
          <div className="relative w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px] shrink-0">
            <div className="absolute inset-0 rounded-full border-[2.5px] border-[#cba465] bg-white" />
            <div className="absolute inset-[4px] rounded-full overflow-hidden">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p
              className="text-black font-medium text-[16px] md:text-[16px] leading-[20px]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {testimonial.name}
            </p>
            <p
              className="text-black/70 font-normal text-[11px] md:text-[13px] leading-[18px] mt-0.5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {testimonial.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Total pages for desktop (3 cards per page, 6 testimonials = 2 pages)
const totalDesktopPages = Math.ceil(testimonials.length / 3);

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0);
  const [desktopDir, setDesktopDir] = useState(0);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrent((prev) => {
        const next = prev + newDirection;
        if (next < 0) return testimonials.length - 1;
        if (next >= testimonials.length) return 0;
        return next;
      });
    },
    []
  );

  // Auto-advance mobile
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  // Auto-advance desktop
  useEffect(() => {
    const timer = setInterval(() => {
      setDesktopDir(1);
      setDesktopPage((prev) => (prev + 1) % totalDesktopPages);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentDesktopCards = testimonials.slice(desktopPage * 3, desktopPage * 3 + 3);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  // Desktop card animations — staggered 3D flip-in
  const desktopCardVariants = {
    enter: (i: number) => ({
      opacity: 0,
      y: 60,
      rotateX: -15,
      scale: 0.92,
    }),
    center: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.12,
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: -40,
      rotateX: 10,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay: (2 - i) * 0.06,
      },
    }),
  };

  return (
    <section className="relative bg-white overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12 md:mb-16 lg:mb-20 px-6"
      >
        <span
          className="text-[30px] md:text-[clamp(2.5rem,8vw,118px)] leading-[1] font-normal bg-clip-text text-transparent"
          style={{
            fontFamily: "var(--font-italiana)",
            backgroundImage:
              "linear-gradient(147deg, rgb(0,0,0) 47%, rgb(255,195,0) 98%)",
          }}
        >
          What People Are Saying
        </span>
      </motion.h2>

      {/* ===== MOBILE: Carousel (1 card at a time) ===== */}
      <div className="lg:hidden px-6 max-w-[600px] mx-auto">
        <div className="relative min-h-[380px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <TestimonialCard testimonial={testimonials[current]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation pills */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className="relative h-[6px] rounded-full overflow-hidden transition-all duration-500 ease-out"
              style={{ width: i === current ? 40 : 12, backgroundColor: i === current ? "transparent" : "rgba(0,0,0,0.15)" }}
              aria-label={`Go to testimonial ${i + 1}`}
            >
              {i === current && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "linear-gradient(90deg, #CBA465, #FFC300)" }}
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ===== DESKTOP: 3 cards rotating with animation ===== */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-6 lg:px-[60px]">
        <div className="relative" style={{ perspective: "1200px" }}>
          <AnimatePresence initial={false} custom={desktopDir} mode="wait">
            <motion.div
              key={desktopPage}
              className="grid grid-cols-3 gap-6 xl:gap-8"
              initial="enter"
              animate="center"
              exit="exit"
            >
              {currentDesktopCards.map((testimonial, i) => (
                <motion.div
                  key={`${desktopPage}-${i}`}
                  custom={i}
                  variants={desktopCardVariants}
                  className="pt-[25px]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation pills */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {Array.from({ length: totalDesktopPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDesktopDir(i > desktopPage ? 1 : -1);
                setDesktopPage(i);
              }}
              className="relative h-[6px] rounded-full overflow-hidden transition-all duration-500 ease-out"
              style={{ width: i === desktopPage ? 50 : 14, backgroundColor: i === desktopPage ? "transparent" : "rgba(0,0,0,0.15)" }}
              aria-label={`Go to page ${i + 1}`}
            >
              {i === desktopPage && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "linear-gradient(90deg, #CBA465, #FFC300)" }}
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
