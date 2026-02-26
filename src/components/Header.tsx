"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  data?: {
    siteLogo?: string;
    headerCta?: { label?: string; href?: string };
    navLinks?: Array<{
      label: string;
      href: string;
      children?: Array<{ label: string; href: string }>;
    }>;
    socialLinks?: Array<{ platform: string; url: string }>;
  };
}

const defaultNavLinks = [
  { label: "About", href: "/about" },
  { label: "Speaking & Media", href: "/speaking" },
  { label: "Books", href: "/books" },
  {
    label: "Work Together",
    href: "/work-together",
    hasDropdown: true,
    children: [
      { label: "Consulting", href: "/work-together/consulting" },
      { label: "Coaching", href: "/work-together/coaching" },
      { label: "Workshops", href: "/work-together/workshops" },
    ],
  },
  { label: "Vault", href: "/vault" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const defaultSocialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
];

// Map platform names to SVG icon JSX for Sanity social links
const socialIconMap: Record<string, React.ReactElement> = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  ),
};

// Nav link with gold underline hover animation
function NavLink({ link, isDropdown, isOpen, onToggle }: {
  link: typeof defaultNavLinks[0];
  isDropdown?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  const content = (
    <motion.span
      className="relative inline-flex items-center gap-1 text-white text-[14px] font-[var(--font-montserrat)] font-normal leading-7 cursor-pointer py-1"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ color: "#CBA465" }}
      transition={{ duration: 0.2 }}
    >
      {link.label}
      {isDropdown && (
        <motion.svg
          className="w-3 h-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      )}
      {/* Gold underline that slides in from left */}
      <motion.span
        className="absolute bottom-0 left-0 h-[2px] rounded-full"
        style={{ background: "linear-gradient(90deg, #CBA465, #FFC300)" }}
        initial={{ width: "0%" }}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.span>
  );

  if (isDropdown) {
    return (
      <button onClick={onToggle} className="relative">
        {content}
      </button>
    );
  }

  return (
    <Link href={link.href}>
      {content}
    </Link>
  );
}

// Animated social icon
function SocialIcon({ social, size = "w-6 h-6" }: { social: typeof defaultSocialLinks[0]; size?: string }) {
  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-white/70 ${size === "w-5 h-5" ? "[&_svg]:w-5 [&_svg]:h-5" : "[&_svg]:w-6 [&_svg]:h-6"}`}
      aria-label={social.label}
      whileHover={{
        color: "#FFC300",
        scale: 1.15,
        y: -2,
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {social.icon}
    </motion.a>
  );
}

export default function Header({ data }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workTogetherOpen, setWorkTogetherOpen] = useState(false);

  // Resolve nav links: use Sanity data if available, otherwise defaults
  const navLinks = data?.navLinks?.length
    ? data.navLinks.map((link) => ({
        ...link,
        hasDropdown: !!link.children?.length,
        children: link.children || [],
      }))
    : defaultNavLinks;

  // Resolve social links: merge Sanity URLs with icon map, otherwise defaults
  const socialLinks = data?.socialLinks?.length
    ? data.socialLinks.map((s) => ({
        label: s.platform.charAt(0).toUpperCase() + s.platform.slice(1),
        href: s.url,
        icon: socialIconMap[s.platform.toLowerCase()] || socialIconMap.facebook,
      }))
    : defaultSocialLinks;

  // Resolve CTA
  const ctaLabel = data?.headerCta?.label || "Book Dr. Cindy to Speak";
  const ctaHref = data?.headerCta?.href || "/book-speaking";

  // Resolve logo
  const logoSrc = data?.siteLogo || "/images/cindy-site-logo.svg";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#010101]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 xl:px-[60px] flex items-center justify-between h-[74px]">
        {/* Signature Logo with shine effect */}
        <Link href="/" className="flex-shrink-0">
          <motion.div
            className="relative overflow-hidden h-[50px]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={logoSrc}
              alt="Dr. Cindy"
              width={148}
              height={59}
              className="h-[50px] w-auto object-contain select-none"
              priority
            />
            {/* Shine sweep effect */}
            <div className="absolute inset-0 pointer-events-none logo-shine" />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              <NavLink
                link={link}
                isDropdown={link.hasDropdown}
                isOpen={workTogetherOpen}
                onToggle={() => setWorkTogetherOpen(!workTogetherOpen)}
              />

              {/* Animated Dropdown */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {workTogetherOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-[#111] border border-[#cba465]/30 rounded-xl py-2 min-w-[200px] shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(203,164,101,0.1)] backdrop-blur-xl overflow-hidden"
                    >
                      {/* Gold accent line at top */}
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-[2px]"
                        style={{ background: "linear-gradient(90deg, transparent, #CBA465, #FFC300, #CBA465, transparent)" }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      />
                      {link.children?.map((child, i) => (
                        <motion.div
                          key={child.label}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.05 + i * 0.06 }}
                        >
                          <Link
                            href={child.href}
                            className="block px-5 py-2.5 text-white/80 hover:text-[#FFC300] hover:bg-white/5 text-sm font-[var(--font-montserrat)] transition-all duration-200 relative group"
                            onClick={() => setWorkTogetherOpen(false)}
                          >
                            <span className="relative z-10">{child.label}</span>
                            {/* Hover gold line on left */}
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-gradient-to-b from-[#CBA465] to-[#FFC300] rounded-full group-hover:h-[60%] transition-all duration-200" />
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Social */}
        <div className="hidden lg:flex items-center gap-5">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={ctaHref}
              className="text-gold hover:text-gold-light text-[14px] font-[var(--font-montserrat)] font-semibold transition-colors flex items-center gap-2 relative group"
            >
              <span>{ctaLabel}</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <SocialIcon key={social.label} social={social} />
            ))}
          </div>
        </div>

        {/* Mobile Hamburger - gold with glow */}
        <motion.button
          className="lg:hidden p-2 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
          style={{ filter: "drop-shadow(0 0 6px rgba(255, 195, 0, 0.5))" }}
        >
          <div className="w-7 h-5 flex flex-col justify-between">
            <motion.span
              className="block h-[2.5px] rounded-full origin-left"
              style={{ background: "linear-gradient(90deg, #CBA465, #FFC300)" }}
              animate={mobileMenuOpen ? { rotate: 45, width: "100%" } : { rotate: 0, width: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="block h-[2.5px] rounded-full"
              style={{ background: "linear-gradient(90deg, #CBA465, #FFC300)" }}
              animate={mobileMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[2.5px] rounded-full origin-left"
              style={{ background: "linear-gradient(90deg, #CBA465, #FFC300)" }}
              animate={mobileMenuOpen ? { rotate: -45, width: "100%" } : { rotate: 0, width: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu - Full screen overlay drawer from right */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer panel sliding from right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[380px] bg-[#0a0a0a] z-50 lg:hidden overflow-y-auto flex flex-col"
            >
              {/* Gold accent line at top */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(90deg, transparent, #CBA465, #FFC300, #CBA465, transparent)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />

              {/* Close button */}
              <div className="flex justify-end p-6 pb-2">
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
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
              <nav className="flex flex-col px-8 pt-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="text-white/90 hover:text-[#FFC300] text-[20px] font-[var(--font-montserrat)] font-light tracking-wide transition-all duration-300 py-4 block border-b border-white/5 relative group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="relative inline-flex items-center gap-3">
                        {/* Gold dot indicator */}
                        <span className="w-[6px] h-[6px] rounded-full bg-[#FFC300] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + navLinks.length * 0.06 }}
                  className="mt-8"
                >
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center justify-center gap-3 w-full bg-[#FFC300] text-black font-semibold text-[16px] font-[var(--font-montserrat)] uppercase tracking-wider px-6 py-4 transition-all duration-300 hover:brightness-110"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {ctaLabel}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </nav>

              {/* Social icons at bottom */}
              <motion.div
                className="flex items-center justify-center gap-6 px-8 py-8 border-t border-white/5 mt-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {socialLinks.map((social, i) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.55 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <SocialIcon social={social} size="w-5 h-5" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Decorative gold swirl */}
              <div className="absolute bottom-0 right-0 w-[200px] h-[200px] opacity-[0.04] pointer-events-none">
                <Image
                  src="/images/gold-swirl-1.png"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
