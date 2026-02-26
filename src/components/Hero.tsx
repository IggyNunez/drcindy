"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {
  data?: {
    titleLine1?: string;
    titleLine2?: string;
    titleLine3?: string;
    titleLine4?: string;
    heroBodyText?: string;
    heroVideoLabel?: string;
    heroTagline?: string;
    heroCta?: { label?: string; href?: string };
    youtubeVideoId?: string;
    storyHeading?: string;
    storyParagraphs?: string[];
    dailySalesHeading?: string;
    dailySalesSubheading?: string;
    dailySalesBody?: string;
    pullQuote?: string;
    helpHeading?: string;
    helpBody?: string;
    helpCta?: { label?: string; href?: string };
    helpMobileCta?: { label?: string; href?: string };
  };
}

export default function Hero({ data }: HeroProps) {
  const [videoOpen, setVideoOpen] = useState(false);
  const videoId = data?.youtubeVideoId || "t7oWUgFCXV0";

  const openVideo = useCallback(() => setVideoOpen(true), []);
  const closeVideo = useCallback(() => setVideoOpen(false), []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* ========== HERO AREA ========== */}
      <div className="relative min-h-screen">
        {/* City skyline background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/city-skyline-new.png"
            alt="City skyline"
            fill
            className="object-cover object-bottom"
            priority
            sizes="100vw"
          />
        </div>

        {/* Gold decorative swirl */}
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          <Image
            src="/images/gold-swirl-1.png"
            alt=""
            fill
            className="object-contain opacity-15"
            aria-hidden="true"
          />
        </div>

        {/* === MAIN HERO COMPOSITION === */}
        <div className="relative z-[25] max-w-[1440px] mx-auto px-6 lg:px-[60px] pt-[74px]">
          <div className="relative min-h-[calc(100vh-314px)] md:min-h-[calc(100vh-224px)] flex flex-col">

            {/* === LAYERED HERO COMPOSITION === */}
            <div className="relative flex-1 flex flex-col items-center pt-[80px] md:pt-[136px] lg:pt-[176px]">

              {/* Localized blur shadow behind Dr. Cindy and title */}
              <div className="absolute inset-0 z-[5] pointer-events-none flex items-start justify-center">
                <div className="w-[200px] h-[350px] md:w-[260px] md:h-[420px] lg:w-[320px] lg:h-[500px] rounded-full bg-black/90 blur-[50px] md:blur-[60px] lg:blur-[70px] mt-[120px]" />
              </div>
              {/* Wide oval shadow behind OF SALES text */}
              <div className="absolute inset-0 z-[5] pointer-events-none flex items-start justify-center">
                <div className="w-[500px] h-[150px] md:w-[650px] md:h-[180px] lg:w-[800px] lg:h-[200px] rounded-full bg-black/90 blur-[50px] md:blur-[60px] lg:blur-[70px] mt-[240px] md:mt-[280px] lg:mt-[320px]" />
              </div>

              {/* LAYER 1 (z-10): "FIRST LADY" text - BEHIND Dr. Cindy */}
              <div className="relative z-10 w-full flex items-center justify-center">
                <motion.h1
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-white text-[clamp(3rem,8.5vw,128px)] xl:text-[128px] font-bold tracking-normal uppercase leading-[1.06] hero-title-shadow" style={{ fontFamily: 'var(--font-josefin)' }}
                >
                  {data?.titleLine1 || "First"}
                </motion.h1>
                <div className="w-[60px] md:w-[150px] lg:w-[200px] shrink-0" />
                <motion.span
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="text-white text-[clamp(3rem,8.5vw,128px)] xl:text-[128px] font-bold tracking-normal uppercase leading-[1.06] ml-4 lg:ml-8 hero-title-shadow" style={{ fontFamily: 'var(--font-josefin)' }}
                >
                  {data?.titleLine2 || "Lady"}
                </motion.span>
              </div>

              {/* LAYER 2 (z-20): Dr. Cindy - IN FRONT of "FIRST LADY", BEHIND "SALES" */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none top-[20px] md:top-[52px] lg:top-[50px]"
              >
                <div className="relative w-[220px] h-[460px] md:w-[380px] md:h-[750px] lg:w-[500px] lg:h-[926px]">
                  <Image
                    src="/images/dr-cindy-hero.png"
                    alt="Dr. Cindy McGovern"
                    fill
                    className="object-contain object-bottom drop-shadow-[0_0_60px_rgba(255,195,0,0.15)]"
                    priority
                  />
                </div>
              </motion.div>

              {/* LAYER 3 (z-[25]): "OF SALES" text - ON TOP of Dr. Cindy */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                className="relative z-[25] w-full flex items-baseline mt-1 md:mt-3 lg:mt-4 justify-center gap-[15px] md:gap-[45px] lg:gap-[60px]"
              >
                <span className="text-white text-[clamp(3rem,8.5vw,128px)] xl:text-[128px] font-bold tracking-normal uppercase leading-[1.06] ml-[25px] md:ml-[85px] lg:ml-[135px] hero-title-shadow" style={{ fontFamily: 'var(--font-josefin)' }}>
                  {data?.titleLine3 || "of"}
                </span>
                <span className="text-[clamp(5rem,12vw,179.2px)] xl:text-[179.2px] font-bold tracking-normal uppercase leading-none gold-shimmer-text" style={{ fontFamily: 'var(--font-josefin)' }}>
                  {data?.titleLine4 || "Sales"}
                </span>
              </motion.div>

              {/* LAYER 4: Content row - Play text on left, Subtitle+CTA on right */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="relative z-[22] w-screen lg:w-full mt-[60px] md:mt-[40px] lg:-mt-[10px] -mx-6 px-6 lg:mx-0 lg:px-0 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 lg:gap-0 py-6 lg:py-0 hero-content-fade lg:!bg-none"
              >

                {/* Play button + text - order-2 on mobile (below subtitle), order-1 on desktop (left side) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
                  className="flex items-center gap-4 md:gap-6 text-center lg:text-right order-2 lg:order-1 lg:ml-[3%] lg:translate-x-[100px] max-w-[90vw] lg:max-w-none"
                >
                  <div className="max-w-[240px] md:max-w-[320px] lg:max-w-none lg:w-[380px]">
                    <p className="text-white text-[14px] md:text-[17px] leading-[22px] md:leading-[26px] tracking-[0.02em] font-normal" style={{ fontFamily: 'var(--font-montserrat)' }}>
                      {data?.heroBodyText || "I teach real people how to get what they want without being someone they're not."}
                    </p>
                    <p className="text-white text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-[0.02em] font-bold mt-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                      {data?.heroVideoLabel || "Watch Dr. Cindy on stage."}
                    </p>
                  </div>
                  <button
                    onClick={openVideo}
                    aria-label="Play video — Watch Dr. Cindy on stage"
                    className="play-pulse shrink-0 w-[64px] h-[64px] md:w-[90px] md:h-[90px] lg:w-[106px] lg:h-[106px] rounded-full border-2 border-gold/60 bg-[#2a2a2a]/80 flex items-center justify-center hover:border-gold hover:bg-[#2a2a2a] transition-all group relative cursor-pointer"
                  >
                    <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 text-gold ml-0.5 md:ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </motion.div>

                {/* Subtitle + CTA - order-1 on mobile (above play), order-2 on desktop (right side) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.3 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 lg:mr-[15%] lg:translate-x-[50px]">
                  <p className="text-white text-[1.15rem] md:text-[clamp(1.1rem,2vw,1.35rem)] font-[var(--font-montserrat)] font-normal leading-relaxed tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    {data?.heroTagline || "Sales Is a Life Skill, Not a Business Skill."}
                  </p>
                  <a
                    href={data?.heroCta?.href || "/book-speaking"}
                    className="mt-4 md:mt-5 inline-flex items-center gap-3 md:gap-4 bg-black/30 border border-gold text-gold font-medium text-[14px] md:text-[20px] leading-[24px] md:leading-[30px] tracking-[0.02em] uppercase px-4 py-3 md:p-5 transition-all duration-300 hover:bg-black/50 hover:scale-[1.02] whitespace-nowrap shadow-[0_0_8px_rgba(203,164,101,0.4),inset_0_0_8px_rgba(255,243,200,0.1)]"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {data?.heroCta?.label || "Book Dr. Cindy to Speak"}
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* === SCROLLING MEDIA LOGOS - desktop only (full width, behind Dr. Cindy) === */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="relative z-[18] py-[10px] mb-[30px] md:mb-[40px] lg:mb-[50px]">
          <div className="relative overflow-hidden w-screen -ml-[50vw] left-[50%]">
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
            <div className="flex items-center gap-8 md:gap-16 animate-marquee">
              <Image src="/images/forbes-logo.png" alt="Forbes" width={200} height={93} className="h-[35px] md:h-[65px] w-auto object-contain brightness-0 invert opacity-40 shrink-0" />
              <Image src="/images/time-logo.png" alt="Time" width={180} height={93} className="h-[35px] md:h-[65px] w-auto object-contain brightness-0 invert opacity-40 shrink-0" />
              <Image src="/images/harvard-logo.png" alt="Harvard Business Review" width={280} height={93} className="h-[35px] md:h-[65px] w-auto object-contain brightness-0 invert opacity-40 shrink-0" />
              <Image src="/images/thrive-global-logo.png" alt="Thrive Global" width={240} height={93} className="h-[35px] md:h-[65px] w-auto object-contain brightness-0 invert opacity-40 shrink-0" />
              <Image src="/images/business-logo.png" alt="Business.com" width={220} height={93} className="h-[35px] md:h-[65px] w-auto object-contain opacity-40 shrink-0" />
              <Image src="/images/forbes-logo.png" alt="Forbes" width={200} height={93} className="h-[35px] md:h-[65px] w-auto object-contain brightness-0 invert opacity-40 shrink-0" />
              <Image src="/images/time-logo.png" alt="Time" width={180} height={93} className="h-[35px] md:h-[65px] w-auto object-contain brightness-0 invert opacity-40 shrink-0" />
              <Image src="/images/harvard-logo.png" alt="Harvard Business Review" width={280} height={93} className="h-[35px] md:h-[65px] w-auto object-contain brightness-0 invert opacity-40 shrink-0" />
              <Image src="/images/thrive-global-logo.png" alt="Thrive Global" width={240} height={93} className="h-[35px] md:h-[65px] w-auto object-contain brightness-0 invert opacity-40 shrink-0" />
              <Image src="/images/business-logo.png" alt="Business.com" width={220} height={93} className="h-[35px] md:h-[65px] w-auto object-contain opacity-40 shrink-0" />
              <Image src="/images/forbes-logo.png" alt="Forbes" width={200} height={93} className="h-[35px] md:h-[65px] w-auto object-contain brightness-0 invert opacity-40 shrink-0" />
              <Image src="/images/time-logo.png" alt="Time" width={180} height={93} className="h-[35px] md:h-[65px] w-auto object-contain brightness-0 invert opacity-40 shrink-0" />
              <Image src="/images/harvard-logo.png" alt="Harvard Business Review" width={280} height={93} className="h-[35px] md:h-[65px] w-auto object-contain brightness-0 invert opacity-40 shrink-0" />
              <Image src="/images/thrive-global-logo.png" alt="Thrive Global" width={240} height={93} className="h-[35px] md:h-[65px] w-auto object-contain brightness-0 invert opacity-40 shrink-0" />
              <Image src="/images/business-logo.png" alt="Business.com" width={220} height={93} className="h-[35px] md:h-[65px] w-auto object-contain opacity-40 shrink-0" />
            </div>
          </div>
        </motion.div>

        {/* Gold glitter divider at bottom - pulled up so Dr. Cindy's feet overlap */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="relative z-20 w-full h-[200px] md:h-[240px] lg:h-[280px] xl:h-[360px] -mt-[10px] md:-mt-[10px] lg:-mt-[10px] xl:-mt-[10px]">
          <Image
            src="/images/gold-divider.png"
            alt=""
            fill
            className="object-cover object-top"
            aria-hidden="true"
          />
          {/* Gold sun flake particles */}
          <canvas
            ref={(canvas) => {
              if (!canvas || canvas.dataset.init) return;
              canvas.dataset.init = 'true';
              const ctx = canvas.getContext('2d');
              if (!ctx) return;

              const resize = () => {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
              };
              resize();
              window.addEventListener('resize', resize);

              const particles: { x: number; y: number; size: number; speed: number; opacity: number; drift: number; color: string }[] = [];
              const colors = ['#FFD700', '#FFF8DC', '#FFE44D', '#FFFFFF', '#FFC300', '#FFFACD'];

              for (let i = 0; i < 60; i++) {
                particles.push({
                  x: Math.random() * canvas.width,
                  y: Math.random() * canvas.height,
                  size: Math.random() * 3 + 1.5,
                  speed: Math.random() * 0.4 + 0.15,
                  opacity: Math.random() * 0.7 + 0.3,
                  drift: (Math.random() - 0.5) * 0.3,
                  color: colors[Math.floor(Math.random() * colors.length)],
                });
              }

              const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach((p) => {
                  p.y -= p.speed;
                  p.x += p.drift;
                  p.opacity += (Math.random() - 0.5) * 0.04;
                  p.opacity = Math.max(0.1, Math.min(0.9, p.opacity));
                  if (p.y < -5) {
                    p.y = canvas.height + 5;
                    p.x = Math.random() * canvas.width;
                  }
                  if (p.x < 0) p.x = canvas.width;
                  if (p.x > canvas.width) p.x = 0;
                  ctx.beginPath();
                  ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                  ctx.fillStyle = p.color;
                  ctx.globalAlpha = p.opacity;
                  ctx.fill();
                  // glow
                  ctx.beginPath();
                  ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
                  ctx.fillStyle = p.color;
                  ctx.globalAlpha = p.opacity * 0.2;
                  ctx.fill();
                });
                ctx.globalAlpha = 1;
                requestAnimationFrame(animate);
              };
              animate();
            }}
            className="absolute inset-0 w-full h-full z-[5] pointer-events-none"
          />
          {/* White fade at bottom to hide dark bg showing through gold image transparency */}
          <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-white to-transparent z-10" />
        </motion.div>
      </div>

      {/* ========== SECTION 2: "You've been in sales since you were five" ========== */}
      <div className="relative z-[25]">
        {/* White background that starts BELOW the overlap area so gold shows through */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white via-[200px] to-white" />
        </div>
        {/* Decorative gold vector swoosh */}
        <div className="absolute inset-0 pointer-events-none z-[5] flex items-center justify-center">
          <Image
            src="/images/vector-1.png"
            alt=""
            width={1920}
            height={1937}
            className="w-full h-auto max-h-none"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-0 pb-20 md:pb-32">
          {/* Centered heading */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-80px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.035,
                },
              },
            }}
            className="text-center uppercase mb-12 md:mb-16 -mt-[180px] md:-mt-[160px] lg:-mt-[100px] text-black text-[8.5vw] md:text-[5vw] lg:text-[clamp(2.5rem,4vw,60px)] xl:text-[60px] font-semibold leading-[1.1] tracking-normal relative z-10" style={{ fontFamily: 'var(--font-josefin)' }}>
            {(data?.storyHeading || "You've been in Sales since you were five.").split(/(?<=\S)\s(?=since)/i).map((part, i, arr) => i < arr.length - 1 ? [part + " ", "\n"] : [part]).flat().map((line, li) =>
              line === "\n" ? (
                <br key={`br-${li}`} className="hidden sm:inline" />
              ) : (
                <span key={li} className="inline">
                  {line.split(" ").map((word, wi) => (
                    <span key={`${li}-w${wi}`} className="inline-block whitespace-nowrap">
                      {word.split("").map((char, ci) => (
                        <motion.span
                          key={`${li}-${wi}-${ci}`}
                          variants={{
                            hidden: { opacity: 0, y: 40, rotateX: -80 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              rotateX: 0,
                              transition: {
                                duration: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                              },
                            },
                          }}
                          className="inline-block"
                          style={{ transformOrigin: "bottom" }}
                        >
                          {char}
                        </motion.span>
                      ))}
                      {wi < line.split(" ").length - 1 && (
                        <motion.span
                          key={`${li}-sp${wi}`}
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 0.01 } },
                          }}
                          className="inline-block"
                        >{"\u00A0"}</motion.span>
                      )}
                    </span>
                  ))}
                </span>
              )
            )}
          </motion.h2>

          {/* Body text + Lemonade stand side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-8 items-end">
            {/* Left: Body text */}
            <div className="text-left order-2 lg:order-1">
              <div className="space-y-8 text-black text-[16px] md:text-[22px] leading-[28px] md:leading-[32px] tracking-[0.02em] font-medium" style={{ fontFamily: 'var(--font-montserrat)' }}>
                {(data?.storyParagraphs && data.storyParagraphs.length > 0) ? (
                  data.storyParagraphs.map((para, i) => (
                    <p key={i} className={i > 0 ? "!font-normal" : ""}>{para}</p>
                  ))
                ) : (
                  <>
                    <p>
                      Campaigning for dessert, making your case to stay up just five
                      more minutes, and negotiating a raise in your allowance were all
                      sales conversations.
                    </p>
                    <p className="!font-normal">
                      But no one ever told you that&apos;s what it was. And they
                      definitely didn&apos;t teach it in school.
                    </p>
                    <p className="!font-normal">
                      Sales has been boxed into boardrooms and quotas, when in
                      reality, it belongs at kitchen tables, in classrooms, and
                      inside everyday conversations.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Right: Lemonade Stand Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full lg:w-full">
                <Image
                  src="/images/lemonade-stand.webp"
                  alt="Lemonade stand - you've been selling since childhood"
                  width={900}
                  height={1100}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== "Every day you're already selling..." ========== */}
      <div className="relative bg-white overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-10 md:pb-14 lg:pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-80px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.03,
                },
              },
            }}
            className="uppercase text-[clamp(1.5rem,5vw,60px)] leading-[1] font-semibold text-black mb-8 md:mb-12" style={{ fontFamily: 'var(--font-josefin)' }}>
            {(data?.dailySalesHeading || "Every day, you're already selling your ideas, your time, your boundaries, and your worth.").split(/,\s*/).map((part, i, arr) => i < arr.length - 1 ? [part + ",", "\n"] : [part]).flat().map((line, li) =>
              line === "\n" ? (
                <br key={`br-${li}`} />
              ) : (
                <span key={li} className="inline">
                  {line.split(" ").map((word, wi) => (
                    <span key={`${li}-w${wi}`} className="inline-block whitespace-nowrap">
                      {word.split("").map((char, ci) => (
                        <motion.span
                          key={`${li}-${wi}-${ci}`}
                          variants={{
                            hidden: { opacity: 0, y: 40, rotateX: -80 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              rotateX: 0,
                              transition: {
                                duration: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                              },
                            },
                          }}
                          className="inline-block"
                          style={{ transformOrigin: "bottom" }}
                        >
                          {char}
                        </motion.span>
                      ))}
                      {wi < line.split(" ").length - 1 && (
                        <motion.span
                          key={`${li}-sp${wi}`}
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 0.01 } },
                          }}
                          className="inline-block"
                        >{"\u00A0"}</motion.span>
                      )}
                    </span>
                  ))}
                </span>
              )
            )}
          </motion.p>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-60px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.04,
                  delayChildren: 0.15,
                },
              },
            }}
            className="font-[var(--font-josefin)] text-[clamp(4rem,18vw,150.77px)] font-bold leading-[1.11] text-black uppercase mb-8 md:mb-12 text-center">
            {(data?.dailySalesSubheading || "You just don't realize it.").split(/\s+/).map((word, i, arr) => i < arr.length - 1 ? [word, "\n"] : [word]).flat().map((word, wi) =>
              word === "\n" ? (
                <br key={`br-${wi}`} />
              ) : (
                <span key={wi} className="inline-block">
                  {word.split("").map((char, ci) => (
                    <motion.span
                      key={`${wi}-${ci}`}
                      variants={{
                        hidden: { opacity: 0, y: 50, rotateX: -80 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          transition: {
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                      }}
                      className="inline-block"
                      style={{ transformOrigin: "bottom" }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              )
            )}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-black font-semibold text-[18px] md:text-[clamp(1rem,2.5vw,1.25rem)] mb-6 text-center" style={{ fontFamily: 'var(--font-montserrat)' }}>
            {data?.dailySalesBody ? data.dailySalesBody.split('\n')[0] : "I didn\u2019t either."}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            className="text-black text-[16px] md:text-[clamp(1rem,2.5vw,22px)] leading-[1.6] lg:leading-[33px] font-semibold max-w-3xl mx-auto text-center" style={{ fontFamily: 'var(--font-montserrat)' }}>
            {data?.dailySalesBody ? data.dailySalesBody.split('\n').slice(1).join(' ') : "With a PhD in Communication, I left teaching to pursue a career in consulting. I never wanted to go into sales, but during that time, I was pushed into the role, and everything changed."}
          </motion.p>
        </div>
      </div>

      {/* ========== QUOTE BLOCK + NOW I HELP (connected by gold arc) ========== */}
      <div className="relative bg-white overflow-hidden">

        {/* Silk texture background spanning both sections */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image-94-bg.png"
            alt=""
            fill
            className="object-cover mix-blend-multiply opacity-40"
            aria-hidden="true"
          />
        </div>

        {/* White fade at top */}
        <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-white to-transparent z-[1] pointer-events-none" />

        {/* Gold swooping arc 1 - darker gold, tilted ellipse from bottom-left to right */}
        <div
          className="absolute z-[2] pointer-events-none hidden lg:block gold-arc"
          style={{
            width: '2200px',
            height: '1200px',
            borderRadius: '50%',
            border: '2.5px solid rgba(203, 164, 101, 0.7)',
            bottom: '-300px',
            left: '-600px',
            transform: 'rotate(-15deg)',
            boxShadow: '0 0 12px 2px rgba(255, 195, 0, 0.15), inset 0 0 12px 2px rgba(255, 195, 0, 0.08)',
          }}
          aria-hidden="true"
        />
        {/* Gold swooping arc 2 - lighter, large circle from upper-right */}
        <div
          className="absolute z-[2] pointer-events-none hidden lg:block gold-arc"
          style={{
            width: '2400px',
            height: '2400px',
            borderRadius: '50%',
            border: '2px solid rgba(203, 164, 101, 0.35)',
            top: '-800px',
            right: '-600px',
            boxShadow: '0 0 10px 2px rgba(255, 195, 0, 0.1), inset 0 0 10px 2px rgba(255, 195, 0, 0.05)',
            animationDelay: '3s',
          }}
          aria-hidden="true"
        />

        {/* ---- QUOTE BLOCK ---- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-[5] pt-0 pb-16 md:pb-24 lg:pb-32">
          <div className="max-w-[1585px] mx-auto px-0 md:px-6">
            {/* 3D floating card */}
            <div className="relative">
              {/* White card with gold inner border */}
              <div className="bg-white relative z-10 px-4 md:px-[81px] py-12 md:py-[83px]">
                <div className="border-[1.5px] border-[#cba465] px-6 md:px-[100px] lg:px-[141px] py-10 md:py-[70px] text-center">
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ margin: "-60px" }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.018,
                          delayChildren: 0.1,
                        },
                      },
                    }}
                    className="text-black text-[16px] md:text-[clamp(1.2rem,4vw,50px)] leading-[1.5] md:leading-[1.3] lg:leading-[65px] font-light text-left" style={{ fontFamily: 'var(--font-josefin)' }}>
                    {(() => {
                      const quoteText = data?.pullQuote || "I realized sales was not icky, cheesy or pushy.\nI had been selling my entire life because I had been helping people get what they wanted, simply because I was curious about what they needed.";
                      const parts = quoteText.split('\n');
                      return [
                        { text: parts[0] || "", bold: true },
                        ...(parts.length > 1 ? [{ text: "\n", bold: false }, { text: parts.slice(1).join(' '), bold: false }] : []),
                      ];
                    })().map((segment, si) =>
                      segment.text === "\n" ? (
                        <br key={`br-${si}`} />
                      ) : (
                        <span key={si} className={segment.bold ? "font-semibold" : ""}>
                          {segment.text.split(" ").map((word, wi) => (
                            <span key={`${si}-w${wi}`} className="inline-block whitespace-nowrap">
                              {word.split("").map((char, ci) => (
                                <motion.span
                                  key={`${si}-${wi}-${ci}`}
                                  variants={{
                                    hidden: { opacity: 0, y: 30, rotateX: -80 },
                                    visible: {
                                      opacity: 1,
                                      y: 0,
                                      rotateX: 0,
                                      transition: {
                                        duration: 0.4,
                                        ease: [0.22, 1, 0.36, 1],
                                      },
                                    },
                                  }}
                                  className="inline-block"
                                  style={{ transformOrigin: "bottom" }}
                                >
                                  {char}
                                </motion.span>
                              ))}
                              {wi < segment.text.split(" ").length - 1 && (
                                <motion.span
                                  key={`${si}-sp${wi}`}
                                  variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1, transition: { duration: 0.01 } },
                                  }}
                                  className="inline-block"
                                >{"\u00A0"}</motion.span>
                              )}
                            </span>
                          ))}
                        </span>
                      )
                    )}
                  </motion.p>
                </div>
              </div>
              {/* Bottom shadow - minimal faded smooth */}
              <div className="absolute -bottom-4 left-[3%] right-[3%] h-[20px] bg-black/15 blur-[20px] rounded-full z-0" />
            </div>
          </div>
        </motion.div>

        {/* ---- NOW I HELP SECTION ---- */}
        <div className="relative">

          {/* Dr. Cindy - absolutely positioned, bleeds up into quote block */}
          <div className="hidden lg:block absolute bottom-0 left-[2%] xl:left-[5%] z-[3] w-[48%] xl:w-[44%] h-full pointer-events-none">
            <Image
              src="/images/cindy-combined.png"
              alt="Dr. Cindy McGovern"
              width={1256}
              height={1494}
              className="absolute bottom-0 -left-[50px] h-[calc(100%+350px)] w-auto max-w-none object-contain object-bottom"
            />
          </div>

          {/* Content */}
          <div className="relative z-[7] max-w-[1440px] mx-auto px-6 lg:px-16">
            <div className="flex flex-col lg:flex-row items-center">

              {/* Mobile: Show Dr. Cindy - full bleed */}
              <div className="lg:hidden w-[calc(100%+48px)] -mx-6">
                <Image
                  src="/images/cindy-mobile.png"
                  alt="Dr. Cindy McGovern"
                  width={856}
                  height={1100}
                  className="w-full h-auto"
                />
              </div>

              {/* Left spacer on desktop - Cindy image shows through here */}
              <div className="hidden lg:block lg:w-[45%]" />

              {/* Right: Text content */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-[55%] flex flex-col justify-center items-start gap-[16px] lg:gap-[24px] border-l-[3px] border-[#CBA465] lg:border-l-0 pl-5 lg:pl-[20px] xl:pl-[40px] pb-12 lg:pb-28 pt-8 lg:pt-24 max-w-[621px] mx-auto lg:mx-0">
              <h2 className="text-black text-[25px] md:text-[40px] lg:text-[clamp(2rem,4.5vw,60px)] font-semibold leading-[1.05] lg:leading-[60px] uppercase text-left self-stretch" style={{ fontFamily: 'var(--font-josefin)' }}>
                {data?.helpHeading || "Now I Help People Sell Themselves Without Selling Their Souls."}
              </h2>

              <p className="text-black text-[16px] lg:text-[22px] leading-[28px] lg:leading-[40px] font-normal text-left self-stretch" style={{ fontFamily: 'var(--font-montserrat)' }}>
                {data?.helpBody || "Whether you\u2019re looking to level up your corporate skills, selling yourself as a leader, or still campaigning for dessert, my 5-Step Formula for selling anything is simple, human, and actually fun. I\u2019ll help you use the sales skills you\u2019ve always had to get what you truly want\u2014at work, at home, and in life."}
              </p>

              {/* CTA Button - different text on mobile vs desktop */}
              <a
                href={data?.helpCta?.href || "/begin"}
                className="inline-flex items-center justify-center gap-[16px] bg-[#FFC300] border-[0.5px] border-black text-black font-medium text-[14px] lg:text-[20px] leading-[30px] tracking-[0.02em] uppercase px-[24px] lg:px-[40px] py-[14px] lg:py-[19px] transition-all duration-300 hover:brightness-95 hover:scale-[1.01] shadow-[0_8px_24px_rgba(255,195,0,0.4)] w-full lg:w-auto"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                <span className="hidden lg:inline">{data?.helpCta?.label || "Begin - Takes 4 minutes"}</span>
                <span className="lg:hidden">{data?.helpMobileCta?.label || "Book Dr. Cindy to Speak"}</span>
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18m0 0l-4-4m4 4l-4 4" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
        {/* Fade to white at bottom for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-[150px] md:h-[200px] lg:h-[250px] bg-gradient-to-t from-white to-transparent z-[6] pointer-events-none" />
        </div>{/* end NOW I HELP relative wrapper */}
      </div>{/* end QUOTE + NOW I HELP outer wrapper */}

      {/* ========== VIDEO MODAL ========== */}
      <AnimatePresence>
        {videoOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100]"
              onClick={closeVideo}
            />
            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 lg:p-16"
            >
              {/* Close button */}
              <button
                onClick={closeVideo}
                aria-label="Close video"
                className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* 16:9 responsive video container */}
              <div className="w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="Watch Dr. Cindy on stage"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
