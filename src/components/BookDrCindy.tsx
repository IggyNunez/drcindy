"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const speakingCategories = [
  {
    label: "Keynotes & Conferences",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4C18.5 4 17.2 4.8 16.6 6H12C10.9 6 10 6.9 10 8V10H8C6.9 10 6 10.9 6 12V14C6 16.2 7.8 18 10 18H10.3C11.1 21 13.3 23.4 16 24.5V28H14C11.8 28 10 29.8 10 32V34H30V32C30 29.8 28.2 28 26 28H24V24.5C26.7 23.4 28.9 21 29.7 18H30C32.2 18 34 16.2 34 14V12C34 10.9 33.1 10 32 10H30V8C30 6.9 29.1 6 28 6H23.4C22.8 4.8 21.5 4 20 4Z" fill="#CBA465"/>
      </svg>
    ),
  },
  {
    label: "Corporate, Higher Ed,\nAssociations & Industry Events",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="12" r="5" fill="#CBA465"/>
        <circle cx="26" cy="12" r="5" fill="#CBA465"/>
        <path d="M6 28C6 23.6 10.5 20 14 20C16.2 20 17.8 20.8 19 21.5M34 28C34 23.6 29.5 20 26 20C23.8 20 22.2 20.8 21 21.5" stroke="#CBA465" strokeWidth="2"/>
        <circle cx="20" cy="16" r="4" fill="#CBA465"/>
        <path d="M10 34C10 28.5 14.5 24 20 24C25.5 24 30 28.5 30 34" stroke="#CBA465" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: "Sales, Leadership, & Personal Branding Workshops",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="28" height="20" rx="2" stroke="#CBA465" strokeWidth="2"/>
        <path d="M20 28V34M14 34H26" stroke="#CBA465" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 16L19 19L24 14" stroke="#CBA465" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Podcast, TV, & Media Appearances",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="18" r="6" stroke="#CBA465" strokeWidth="2"/>
        <path d="M20 24V30" stroke="#CBA465" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 30H26" stroke="#CBA465" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 18C10 12.5 14.5 8 20 8C25.5 8 30 12.5 30 18" stroke="#CBA465" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 18C6 10.3 12.3 4 20 4C27.7 4 34 10.3 34 18" stroke="#CBA465" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
];

function VideoEmbed() {
  const [playing, setPlaying] = useState(false);
  const videoId = "t7oWUgFCXV0";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[1140px] mx-auto mb-16 md:mb-24 rounded-[12px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
    >
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&si=b8Y5ASrepiOtf6lr`}
            title="Dr. Cindy McGovern Speaking"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full cursor-pointer group"
            aria-label="Play video"
          >
            {/* YouTube thumbnail */}
            <Image
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Dr. Cindy McGovern Speaking"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1140px"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

            {/* Animated play button with pulsing waves */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outermost pulse ring */}
              <motion.div
                className="absolute rounded-full bg-[#FFC300]/15"
                style={{ width: 180, height: 180 }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              {/* Second pulse ring */}
              <motion.div
                className="absolute rounded-full bg-[#FFC300]/20"
                style={{ width: 160, height: 160 }}
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.4,
                }}
              />
              {/* Third pulse ring */}
              <motion.div
                className="absolute rounded-full bg-[#FFC300]/25"
                style={{ width: 140, height: 140 }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.8,
                }}
              />
              {/* SVG play button (from asset) */}
              <motion.svg
                width="120"
                height="120"
                viewBox="0 0 350 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 drop-shadow-[0_4px_20px_rgba(255,195,0,0.4)]"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <circle cx="175" cy="175" r="175" fill="#FFC300" fillOpacity="0.2" />
                <circle cx="175" cy="175" r="115" fill="#FFC300" fillOpacity="0.4" />
                <circle cx="175" cy="175" r="80" fill="#FFC300" fillOpacity="0.4" stroke="black" strokeWidth="2.43" />
                <path d="M192.82 174.189L164.869 190.327L164.869 158.051L192.82 174.189Z" fill="black" />
              </motion.svg>
            </div>
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function BookDrCindy() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Silk texture background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image-94-book.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      {/* White fade at top */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-white to-transparent z-[1] pointer-events-none" />

      {/* Gold decorative arcs */}
      <div
        className="absolute z-[2] pointer-events-none hidden lg:block gold-arc"
        style={{
          width: "2200px",
          height: "1200px",
          borderRadius: "50%",
          border: "2.5px solid rgba(203, 164, 101, 0.5)",
          bottom: "-300px",
          left: "-600px",
          transform: "rotate(-15deg)",
          boxShadow: "0 0 12px 2px rgba(255, 195, 0, 0.15), inset 0 0 12px 2px rgba(255, 195, 0, 0.08)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute z-[2] pointer-events-none hidden lg:block gold-arc"
        style={{
          width: "2400px",
          height: "2400px",
          borderRadius: "50%",
          border: "2px solid rgba(203, 164, 101, 0.3)",
          top: "-800px",
          right: "-600px",
          boxShadow: "0 0 10px 2px rgba(255, 195, 0, 0.1), inset 0 0 10px 2px rgba(255, 195, 0, 0.05)",
          animationDelay: "3s",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-[5] max-w-[1440px] mx-auto px-6 lg:px-[60px] pt-20 md:pt-28 lg:pt-36 pb-32 md:pb-40 lg:pb-48">

        {/* ===== TITLE ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[45px] md:text-[clamp(3rem,10vw,150px)] leading-[0.95] mb-16 md:mb-24"
          style={{
            fontFamily: "var(--font-italiana)",
            backgroundImage: "linear-gradient(115deg, rgb(0, 0, 0) 47%, rgb(255, 195, 0) 98%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Book Dr. Cindy<br />To Speak
        </motion.h2>

        {/* ===== TWO COLUMN: Text + Speaking Categories ===== */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16 md:mb-24">
          {/* Left: Intro text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-[50%] flex flex-col gap-6 lg:gap-8"
          >
            <p
              className="text-black text-[18px] md:text-[26px] lg:text-[28px] font-medium leading-[1.25] tracking-[0.02em] text-left"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Looking for a speaker who transforms the way people think about sales and themselves?
            </p>
            <p
              className="text-black text-[16px] md:text-[18px] lg:text-[20px] leading-[1.75] font-normal text-left"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Dr. Cindy McGovern, known as the First Lady of Sales®, delivers dynamic, actionable keynotes that show individuals and organizations how to sell themselves, their ideas, and their value in every area of life. With decades of experience as a sales consultant, bestselling author, keynote speaker, and CEO, Dr. Cindy INpowers audiences. She helps them activate the power they already have, rather than waiting for permission or external validation to start creating the success they deserve. Through this approach, she makes sales feel authentic, ethical, and even fun.
            </p>
          </motion.div>

          {/* Right: Speaking categories */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:w-[50%] flex flex-col justify-center"
          >
            {speakingCategories.map((cat, i) => (
              <div
                key={cat.label}
                className={`flex items-center gap-4 py-5 lg:py-6 ${
                  i < speakingCategories.length - 1
                    ? "border-b border-[#CBA465]/40"
                    : ""
                }`}
              >
                <div className="shrink-0">{cat.icon}</div>
                <p
                  className="text-black font-semibold text-[18px] md:text-[20px] lg:text-[22px] leading-[1.4] whitespace-pre-line"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {cat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ===== YOUTUBE VIDEO ===== */}
        <VideoEmbed />

        {/* ===== TESTIMONIAL ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <p
            className="text-black text-[16px] md:text-[20px] tracking-[7.6px] uppercase font-normal mb-12"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            What They Say About Dr. Cindy
          </p>

          {/* Glass card */}
          <div className="relative max-w-[1140px] mx-auto">
            {/* Gold quote mark */}
            <div className="flex justify-center mb-[-20px] z-10 relative">
              <svg width="75" height="59" viewBox="0 0 75 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4152 58.6143C14.9717 58.6143 12.1271 57.9406 9.88134 56.5932C7.63558 55.2457 5.76412 53.4491 4.26694 51.2033C2.76977 48.8078 1.64689 46.1129 0.898305 43.1186C0.299436 40.1242 0 37.4293 0 35.0339C0 27.6977 1.87147 20.9604 5.6144 14.822C9.50705 8.6836 15.4209 3.74293 23.3559 0L25.3771 4.04238C20.8856 5.9887 16.9929 8.98305 13.6991 13.0254C10.4054 17.0678 8.60875 21.185 8.30931 25.3771C8.00988 27.6229 8.15959 29.7189 8.75846 31.6652C11.4534 29.12 14.7472 27.8474 18.6398 27.8474C22.9816 27.8474 26.6497 29.2697 29.644 32.1144C32.6384 34.8093 34.1355 38.5522 34.1355 43.3432C34.1355 47.8347 32.5635 51.5028 29.4195 54.3474C26.4251 57.192 22.757 58.6143 18.4152 58.6143ZM59.2881 58.6143C55.8446 58.6143 52.9999 57.9406 50.7542 56.5932C48.5084 55.2457 46.6369 53.4491 45.1398 51.2033C43.6426 48.8078 42.5197 46.1129 41.7711 43.1186C41.1723 40.1242 40.8728 37.4293 40.8728 35.0339C40.8728 27.6977 42.7443 20.9604 46.4872 14.822C50.3799 8.6836 56.2937 3.74293 64.2287 0L66.2499 4.04238C61.7584 5.9887 57.8657 8.98305 54.572 13.0254C51.2782 17.0678 49.4816 21.185 49.1821 25.3771C48.8827 27.6229 49.0324 29.7189 49.6313 31.6652C52.3262 29.12 55.62 27.8474 59.5126 27.8474C63.8544 27.8474 67.5225 29.2697 70.5168 32.1144C73.5112 34.8093 75.0084 38.5522 75.0084 43.3432C75.0084 47.8347 73.4363 51.5028 70.2923 54.3474C67.2979 57.192 63.6299 58.6143 59.2881 58.6143Z" fill="#FFC300"/>
              </svg>
            </div>
            <div
              className="border-[2.5px] border-[#CBA465] rounded-[26px] px-8 md:px-16 lg:px-24 py-12 md:py-16"
              style={{
                backdropFilter: "blur(17.5px)",
                backgroundImage:
                  "linear-gradient(140deg, rgba(255,255,255,0.27) 6%, rgba(255,255,255,0.06) 19%, rgba(255,255,255,0.02) 21%, rgba(255,255,255,0.02) 81%, rgba(255,255,255,0.2) 87%, rgba(255,255,255,0.27) 99%)",
              }}
            >
              <p
                className="text-black text-[16px] md:text-[20px] lg:text-[22px] font-semibold leading-[1.4] mb-2 text-left"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Dr. Cindy&apos;s approach mixes simplicity with actionable takeaways,
              </p>
              <p
                className="text-black text-[16px] md:text-[20px] lg:text-[22px] font-semibold leading-[1.4] mb-8 text-left"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                creating measurable ROIs. I highly recommend her!
              </p>
              <p
                className="text-black text-[16px] md:text-[20px] lg:text-[22px] font-medium leading-[1.4] text-left"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                - Kathleen S. Ellis, Senior Vice President, CNA International Solution
              </p>
            </div>
          </div>
        </motion.div>

        {/* ===== CTA BUTTON ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-20 md:mb-28"
        >
          <motion.a
            href="/speaking"
            className="inline-flex items-center justify-center gap-3 bg-[#FFC300] border-[0.5px] border-black text-black font-medium text-[14px] md:text-[16px] lg:text-[20px] leading-[30px] tracking-[0.02em] uppercase px-5 md:px-[30px] lg:px-[40px] py-3 lg:py-[19px] transition-all duration-300 hover:brightness-95 shadow-[0_8px_24px_rgba(255,195,0,0.3)] whitespace-nowrap"
            style={{ fontFamily: "var(--font-montserrat)" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Dr. Cindy to Speak
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18m0 0l-4-4m4 4l-4 4" />
            </svg>
          </motion.a>
        </motion.div>

        {/* ===== NEWSLETTER SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h3
            className="text-black text-[30px] md:text-[clamp(2rem,6vw,60px)] font-semibold leading-[1.05] uppercase mb-6"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            Learn How to Sell<br />Yourself Without<br />Selling Out.
          </h3>
          <p
            className="text-black text-[16px] md:text-[20px] lg:text-[22px] font-normal leading-[1.5] mb-10 md:mb-12 text-left md:text-center"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Sign up for monthly inspiration, tough love, and a little sparkle.
          </p>

          {/* Signup Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <input
              type="text"
              placeholder="Name*"
              required
              className="w-full sm:w-[280px] md:w-[317px] h-[56px] md:h-[63px] px-5 bg-white border border-black text-[#232323] text-[16px] md:text-[18px] font-normal placeholder:text-[#232323] focus:outline-none focus:border-[#CBA465] transition-colors"
              style={{ fontFamily: "var(--font-montserrat)" }}
            />
            <input
              type="email"
              placeholder="Email*"
              required
              className="w-full sm:w-[280px] md:w-[317px] h-[56px] md:h-[63px] px-5 bg-white border border-black text-[#232323] text-[16px] md:text-[18px] font-normal placeholder:text-[#232323] focus:outline-none focus:border-[#CBA465] transition-colors"
              style={{ fontFamily: "var(--font-montserrat)" }}
            />
          </form>
          <motion.button
            type="submit"
            className="inline-flex items-center justify-center gap-3 bg-[#FFC300] border-[0.5px] border-black text-black font-medium text-[14px] md:text-[16px] lg:text-[20px] leading-[30px] tracking-[0.02em] uppercase px-5 md:px-[30px] lg:px-[40px] py-3 lg:py-[19px] transition-all duration-300 hover:brightness-95 shadow-[0_8px_24px_rgba(255,195,0,0.3)] cursor-pointer whitespace-nowrap"
            style={{ fontFamily: "var(--font-montserrat)" }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign Up
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18m0 0l-4-4m4 4l-4 4" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* White fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-white to-transparent z-[3] pointer-events-none" />
    </section>
  );
}
