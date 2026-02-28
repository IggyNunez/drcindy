"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface AboutProps {
  data?: {
    heading?: string;
    subtitle?: string;
    bodyParagraphs?: string[];
    calloutQuote?: string;
    closingParagraph?: string;
    photo?: string;
    cta?: { label?: string; href?: string };
  };
}

export default function AboutDrCindy({ data }: AboutProps) {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Gold swirl decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <Image
          src="/images/gold-swirl-about.svg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-[60px] py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-start">

          {/* LEFT: Text content */}
          <div className="relative z-10 flex-1 lg:max-w-[560px]">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-black text-[30px] md:text-[clamp(2.2rem,5vw,60px)] font-semibold leading-[1] uppercase tracking-normal mb-4 md:mb-5"
              style={{ fontFamily: "var(--font-josefin)" }}
            >
              {data?.heading || "About Dr. Cindy"}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-black font-medium text-[18px] md:text-[28px] leading-[1.25] tracking-[0.02em] mb-8 md:mb-10 text-left"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {data?.subtitle || "I never wanted to be in sales."}
            </motion.p>

            {/* Body text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="space-y-2 text-black text-[16px] md:text-[19px] lg:text-[22px] leading-[1.8] md:leading-[40px] text-left"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {data?.bodyParagraphs ? (
                data.bodyParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <>
                  <p>
                    I began my career as a college professor, armed with three degrees in communication and a passion for teaching. But standing in front of bleary-eyed sophomores at 8 a.m., trying to make public speaking sound sexy? That wasn&apos;t it.
                  </p>
                  <p>
                    During the summers, I picked up consulting work. Working with adults turned out to be where I wanted to be. I was helping people who actually wanted to be there. Eventually, I took on a full-time role that I thought was a consulting position. But six months into the job, I was pushed into a sales position, and I was terrified. I thought I was going to get fired because I did not know how to sell, nor did I want to learn. I was pushed into the role, kicking and screaming.
                  </p>
                </>
              )}
            </motion.div>

            {/* Callout quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="my-4 md:my-5"
            >
              <p
                className="text-black font-medium text-[18px] md:text-[28px] leading-[1.25] tracking-[0.02em] text-left"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {data?.calloutQuote || (
                  <>
                    People avoid sales
                    <br />
                    because of the &apos;ick factor.&apos;
                  </>
                )}
              </p>
            </motion.div>

            {/* More body text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="text-black text-[16px] md:text-[19px] lg:text-[22px] leading-[1.8] md:leading-[40px] mb-5 text-left"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <p>
                {data?.closingParagraph || (
                  <>
                    To me, sales meant slick handshake deals, fake smiles, and a whole lot of manipulation. My boss told me, <em>&ldquo;If you can learn to sell, it&apos;ll change your life.&rdquo;</em> I rolled my eyes so hard they almost got stuck. But it turns out that he was right. A few months into the role, something clicked. I realized I didn&apos;t hate sales, I hated bad sales. I liked helping people. I enjoyed solving problems. And I was good at it. That&apos;s when it hit me: <strong>Sales isn&apos;t a business skill. It&apos;s a life skill.</strong>
                  </>
                )}
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <a
                href={data?.cta?.href || "/about"}
                className="inline-flex items-center justify-center gap-[16px] bg-[#FFC300] border-[0.5px] border-black text-black font-medium text-[16px] lg:text-[20px] leading-[30px] tracking-[0.02em] uppercase px-[30px] lg:px-[40px] py-[14px] lg:py-[19px] transition-all duration-300 hover:brightness-95 hover:scale-[1.01] shadow-[0_8px_24px_rgba(255,195,0,0.3)]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {data?.cta?.label || "Read More"}
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18m0 0l-4-4m4 4l-4 4" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Dr. Cindy photo - fills the full height of the content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative flex-1 lg:flex-[1.2] w-full lg:self-stretch"
          >
            {/* Mobile: show full image */}
            <div className="lg:hidden relative w-full">
              <Image
                src={data?.photo || "/images/about-cindy.png"}
                alt="Dr. Cindy McGovern"
                width={800}
                height={1000}
                className="w-full h-auto object-contain"
                sizes="100vw"
              />
            </div>
            {/* Desktop: contain full image within content height */}
            <div className="hidden lg:block absolute inset-0">
              <Image
                src={data?.photo || "/images/about-cindy.png"}
                alt="Dr. Cindy McGovern"
                fill
                className="object-contain object-center"
                sizes="55vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
