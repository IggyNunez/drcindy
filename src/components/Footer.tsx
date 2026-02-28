"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface FooterProps {
  data?: {
    footerLogo?: string;
    tagline?: string;
    copyrightText?: string;
    navLinks?: Array<{
      label: string;
      href: string;
      children?: Array<{ label: string; href: string }>;
    }>;
    socialLinks?: Array<{ platform: string; url: string }>;
    privacyLink?: string;
    termsLink?: string;
  };
}

const defaultNavLinks = [
  { label: "About", href: "/about" },
  { label: "Speaking & Media", href: "/speaking" },
  { label: "Books", href: "/books" },
  { label: "Work Together", href: "/work-together", hasDropdown: true },
  { label: "Vault", href: "/vault" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const defaultSocialIcons = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    path: "M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    path: "M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z",
  },
];

// Map platform names to SVG path strings for Sanity social links
const socialPathMap: Record<string, string> = {
  facebook:
    "M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z",
  instagram:
    "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
  linkedin:
    "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
  youtube:
    "M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z",
  tiktok:
    "M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z",
};

function SocialLink({ icon }: { icon: typeof defaultSocialIcons[0] }) {
  return (
    <a
      href={icon.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-[#FFC300] transition-colors"
      aria-label={icon.label}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d={icon.path} />
      </svg>
    </a>
  );
}

export default function Footer({ data }: FooterProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Resolve nav links: use Sanity data if available, otherwise defaults
  const navLinks = data?.navLinks?.length
    ? data.navLinks.map((link) => ({
        ...link,
        hasDropdown: !!link.children?.length,
      }))
    : defaultNavLinks;

  // Resolve social icons: merge Sanity URLs with path map, otherwise defaults
  const socialIcons = data?.socialLinks?.length
    ? data.socialLinks.map((s) => ({
        label: s.platform.charAt(0).toUpperCase() + s.platform.slice(1),
        href: s.url,
        path: socialPathMap[s.platform.toLowerCase()] || socialPathMap.facebook,
      }))
    : defaultSocialIcons;

  // Resolve text content
  const tagline = data?.tagline || "Sales Is a Life Skill, Not a Business Skill.";
  const copyrightText = data?.copyrightText || "\u00A9 2026 Dr. Cindy McGovern. All Rights Reserved.";
  const privacyLink = data?.privacyLink || "/privacy";
  const termsLink = data?.termsLink || "/terms";
  const logoSrc = data?.footerLogo || "/images/cindy-site-logo-footer.svg";

  return (
    <footer className="relative bg-[#010101] overflow-hidden">
      {/* ===== MOBILE FOOTER: Compact bar + full overlay drawer ===== */}
      <div className="md:hidden">
        {/* Compact footer bar - always visible */}
        <div className="px-6 pt-8 pb-4">
          {/* Logo */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <Link href="/" className="flex-shrink-0">
              <motion.div
                className="relative overflow-hidden w-[120px] h-[50px]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={logoSrc}
                  alt="Dr. Cindy"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 pointer-events-none logo-shine-footer" />
              </motion.div>
            </Link>
            <p
              className="text-white text-[16px] font-normal leading-[1.5] text-center"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {tagline.includes(",") ? (
                <>
                  {tagline.split(",")[0]},
                  <br />
                  {tagline.split(",").slice(1).join(",")}
                </>
              ) : (
                tagline
              )}
            </p>
          </div>

          {/* Drawer toggle - hamburger icon */}
          <motion.button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="mx-auto flex items-center justify-center w-10 h-10 py-3"
            whileTap={{ scale: 0.9 }}
            style={{ filter: "drop-shadow(0 0 6px rgba(255, 195, 0, 0.5))" }}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-7 h-5 flex flex-col justify-between relative">
              <motion.span
                className="block h-[2.5px] rounded-full origin-left"
                style={{ background: "linear-gradient(90deg, #CBA465, #FFC300)" }}
                animate={drawerOpen ? { rotate: 45, width: "100%" } : { rotate: 0, width: "100%" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.span
                className="block h-[2.5px] rounded-full"
                style={{ background: "linear-gradient(90deg, #CBA465, #FFC300)" }}
                animate={drawerOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-[2.5px] rounded-full origin-left"
                style={{ background: "linear-gradient(90deg, #CBA465, #FFC300)" }}
                animate={drawerOpen ? { rotate: -45, width: "100%" } : { rotate: 0, width: "100%" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </motion.button>
        </div>

        {/* Full overlay drawer */}
        <AnimatePresence>
          {drawerOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => setDrawerOpen(false)}
              />

              {/* Drawer panel sliding from bottom */}
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="fixed bottom-0 left-0 right-0 max-h-[85vh] bg-[#0a0a0a] z-50 overflow-y-auto flex flex-col rounded-t-[20px]"
              >
                {/* Gold accent line at top */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[20px]"
                  style={{ background: "linear-gradient(90deg, transparent, #CBA465, #FFC300, #CBA465, transparent)" }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />

                {/* Close button */}
                <div className="flex justify-end p-5 pb-0">
                  <motion.button
                    onClick={() => setDrawerOpen(false)}
                    className="text-white/70 hover:text-[#FFC300] transition-colors p-1"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Navigation links */}
                <nav className="flex flex-col items-center px-8 pt-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full"
                    >
                      <Link
                        href={link.href}
                        className="text-white/90 hover:text-[#FFC300] text-[18px] font-light tracking-wide transition-all duration-300 py-3.5 block border-b border-white/5 text-center relative group"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <span className="relative inline-flex items-center gap-3">
                          <span className="w-[5px] h-[5px] rounded-full bg-[#FFC300] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
                          {link.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Social icons */}
                <motion.div
                  className="flex items-center justify-center gap-6 px-8 py-6 mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {socialIcons.map((icon, i) => (
                    <motion.div
                      key={icon.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.55 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <SocialLink icon={icon} />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Bottom info */}
                <div className="px-6 py-4 border-t border-white/5 mt-auto">
                  <div className="flex flex-col items-center gap-2">
                    <p
                      className="text-[#8B8B8B] text-[12px] font-light leading-[20px] text-center"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {copyrightText}
                    </p>
                    <div className="flex items-center gap-4">
                      <Link
                        href={privacyLink}
                        className="text-[#8B8B8B] text-[12px] font-light hover:text-white transition-colors whitespace-nowrap"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        onClick={() => setDrawerOpen(false)}
                      >
                        Privacy Policy
                      </Link>
                      <Link
                        href={termsLink}
                        className="text-[#8B8B8B] text-[12px] font-light hover:text-white transition-colors whitespace-nowrap"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                        onClick={() => setDrawerOpen(false)}
                      >
                        Terms & Conditions
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Bottom row - always visible */}
        <div className="px-6 py-4 border-t border-white/5">
          <div className="flex flex-col items-center gap-2">
            <p
              className="text-[#8B8B8B] text-[12px] font-light leading-[20px] text-center"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {copyrightText}
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={privacyLink}
                className="text-[#8B8B8B] text-[12px] font-light hover:text-white transition-colors whitespace-nowrap"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Privacy Policy
              </Link>
              <Link
                href={termsLink}
                className="text-[#8B8B8B] text-[12px] font-light hover:text-white transition-colors whitespace-nowrap"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Terms & Conditions
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <p
                className="text-[#8B8B8B] text-[12px] font-light"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Website By:
              </p>
              <div className="relative w-[130px] h-[20px]">
                <Image
                  src="/images/brand-alchemy-logo.svg"
                  alt="Brand Alchemy"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP FOOTER: Full layout (unchanged) ===== */}
      <div className="hidden md:block max-w-[1440px] mx-auto px-6 lg:px-[60px] pt-20 lg:pt-24 pb-10">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <Link href="/" className="flex-shrink-0">
            <motion.div
              className="relative overflow-hidden w-[180px] h-[75px]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={logoSrc}
                alt="Dr. Cindy"
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 pointer-events-none logo-shine-footer" />
            </motion.div>
          </Link>
          <p
            className="text-white text-[22px] lg:text-[28px] font-normal leading-[1.75] text-center"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {tagline}
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#CBA465] to-transparent mb-12 gold-line-shine"
          style={{ boxShadow: "0 0 8px 1px rgba(255, 195, 0, 0.15)" }}
        />

        {/* Nav + Social row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
          {/* Nav links */}
          <nav className="flex flex-wrap justify-center lg:justify-start gap-x-6 xl:gap-x-10 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#FFFDF0] text-[14px] lg:text-[15px] font-normal leading-[28px] hover:text-[#FFC300] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {link.label}
                {link.hasDropdown && (
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="rotate-180">
                    <path d="M1 1L6 6L11 1" stroke="#FFFDF0" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>

          {/* Follow + Social icons */}
          <div className="flex items-center justify-center lg:justify-end gap-5">
            <p
              className="text-[#FFFDF0] text-[16px] font-normal leading-[28px] shrink-0"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Follow Dr. Cindy:
            </p>
            <div className="flex items-center gap-4">
              {socialIcons.map((icon) => (
                <SocialLink key={icon.label} icon={icon} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row: Copyright + Brand Alchemy */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
            <p
              className="text-[#8B8B8B] text-[14px] font-light leading-[25px]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {copyrightText}
            </p>
            <span className="text-[#8B8B8B] text-[14px] font-light">
              &nbsp;&nbsp;
            </span>
            <Link
              href={privacyLink}
              className="text-[#8B8B8B] text-[14px] font-light leading-[25px] hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Privacy Policy
            </Link>
            <span className="text-[#8B8B8B] text-[14px] font-light">&nbsp;&nbsp;</span>
            <Link
              href={termsLink}
              className="text-[#8B8B8B] text-[14px] font-light leading-[25px] hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Terms & Conditions
            </Link>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-2">
            <p
              className="text-[#8B8B8B] text-[14px] font-light leading-[28px]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Website By:
            </p>
            <div className="relative w-[180px] h-[25px]">
              <Image
                src="/images/brand-alchemy-logo.svg"
                alt="Brand Alchemy"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
