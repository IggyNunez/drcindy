"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface WorkTogetherProps {
  data?: {
    heading?: string;
    subtitle?: string;
    body?: string;
    services?: Array<{ label: string; href: string }>;
    photo?: string;
    cta?: { label?: string; href?: string };
  };
}

const defaultServices = [
  { label: "Keynote Speaking", href: "/speaking" },
  { label: "1:1 Coaching & Consulting", href: "/work-together/coaching" },
  { label: "Training & Team Development", href: "/work-together/workshops" },
  { label: "Online Academy", href: "/vault" },
];

export default function WorkTogether({ data }: WorkTogetherProps) {
  const services = data?.services?.length ? data.services : defaultServices;

  return (
    <section className="relative bg-white overflow-hidden py-10 md:py-24 lg:py-32">
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-0">
          {/* Left side - Photo + service links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[50%] flex flex-col items-center justify-end order-1 lg:order-1"
          >
            {/* Dr. Cindy photo */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src={data?.photo || "/images/cindy-sitting-vignette.png"}
                alt="Dr. Cindy McGovern"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Service category links */}
            <div className="w-full flex flex-col">
              {services.map((service, i) => (
                <motion.a
                  key={service.label}
                  href={service.href}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center justify-center px-4 py-4 md:py-5 border-t-2 border-[#CBA465]/60 hover:bg-[#FFC300]/5 hover:border-[#FFC300]/80 transition-all group"
                >
                  <span
                    className="text-black font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-center"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {service.label}
                  </span>
                  <svg
                    className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="w-full lg:w-[50%] flex flex-col justify-center gap-8 md:gap-11 order-2 lg:order-2 lg:pl-16"
          >
            {/* Title + subtitle */}
            <div className="flex flex-col gap-4 md:gap-[22px]">
              <h2
                className="text-black text-[30px] md:text-[clamp(2rem,5vw,60px)] font-semibold leading-[1] uppercase tracking-normal"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                {data?.heading || "Work Together"}
              </h2>
              <p
                className="text-black text-[18px] md:text-[24px] lg:text-[28px] font-medium leading-[1.25] tracking-[0.02em] text-left"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {data?.subtitle || "Sales is the key to the life and business you want."}
              </p>
            </div>

            {/* Description */}
            <p
              className="text-black text-[16px] md:text-[19px] lg:text-[22px] leading-[1.7] md:leading-[40px] text-left"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {data?.body || "Whether you\u2019re leading a team, building your career, or simply ready to stop waiting for permission, Dr. Cindy offers multiple ways to help you transform how you sell yourself and your ideas. From hands-on consulting and dynamic training programs for organizations to one-on-one coaching for leaders and professionals, as well as on-demand courses, every option is designed to meet you where you are and move you forward. No matter how you choose to work with Dr. Cindy, you\u2019ll walk away with clear, actionable strategies you can use immediately and the confidence to actually use them. Click below to explore all services and find the best fit for you."}
            </p>

            {/* CTA Button */}
            <div>
              <motion.a
                href={data?.cta?.href || "/work-together/consulting"}
                className="inline-flex items-center justify-center gap-3 bg-[#FFC300] border-[0.5px] border-black text-black font-medium text-[14px] md:text-[16px] lg:text-[20px] leading-[30px] tracking-[0.02em] uppercase px-5 md:px-[30px] lg:px-[40px] py-3 lg:py-[19px] transition-all duration-300 hover:brightness-95 shadow-[0_8px_24px_rgba(255,195,0,0.3)] whitespace-nowrap"
                style={{ fontFamily: "var(--font-montserrat)" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {data?.cta?.label || "Begin - Takes 4 minutes"}
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18m0 0l-4-4m4 4l-4 4" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
