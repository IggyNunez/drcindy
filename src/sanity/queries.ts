import { groq } from "next-sanity";

// ── Hero Section ──────────────────────────────────────────────
export const heroQuery = groq`
  *[_type == "heroSection"][0]{
    titleLine1,
    titleLine2,
    titleLine3,
    titleLine4,
    heroBodyText,
    heroVideoLabel,
    heroTagline,
    heroCta,
    heroImage,
    heroBackground,
    youtubeVideoId,
    storyHeading,
    storyParagraphs,
    storyImage,
    dailySalesHeading,
    dailySalesSubheading,
    dailySalesBody,
    pullQuote,
    helpHeading,
    helpBody,
    helpImage,
    helpMobileImage,
    helpCta,
    helpMobileCta,
  }
`;

// ── Testimonials ──────────────────────────────────────────────
export const testimonialsSectionQuery = groq`
  *[_type == "testimonialsSection"][0]{
    heading,
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    body,
    name,
    title,
    "avatar": avatar.asset->url,
    order,
  }
`;

// ── About Dr. Cindy ──────────────────────────────────────────
export const aboutQuery = groq`
  *[_type == "aboutSection"][0]{
    heading,
    subtitle,
    bodyParagraphs,
    calloutQuote,
    closingParagraph,
    "photo": photo.asset->url,
    cta,
  }
`;

// ── Books ─────────────────────────────────────────────────────
export const booksSectionQuery = groq`
  *[_type == "booksSection"][0]{
    heading,
    description,
  }
`;

export const booksQuery = groq`
  *[_type == "book"] | order(order asc) {
    _id,
    title,
    subtitle,
    "coverImage": coverImage.asset->url,
    buyLink,
    order,
  }
`;

// ── Work Together ─────────────────────────────────────────────
export const workTogetherQuery = groq`
  *[_type == "workTogetherSection"][0]{
    heading,
    subtitle,
    body,
    services[] { label, href },
    "photo": photo.asset->url,
    cta,
  }
`;

// ── Book Dr. Cindy / Speaking ─────────────────────────────────
export const bookSpeakingQuery = groq`
  *[_type == "bookSpeakingSection"][0]{
    heading,
    introText,
    bodyText,
    speakingCategories[] { label },
    youtubeVideoId,
    testimonialQuote,
    testimonialAttribution,
    cta,
    newsletterHeading,
    newsletterDescription,
    "backgroundImage": backgroundImage.asset->url,
  }
`;

// ── Media Logos ────────────────────────────────────────────────
export const mediaLogosQuery = groq`
  *[_type == "mediaLogo"] | order(order asc) {
    _id,
    name,
    "logo": logo.asset->url,
    url,
    order,
  }
`;

// ── Site Settings (Header / Footer / Global) ──────────────────
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    "siteLogo": siteLogo.asset->url,
    "footerLogo": footerLogo.asset->url,
    tagline,
    copyrightText,
    headerCta,
    navLinks[] {
      label,
      href,
      children[] { label, href },
    },
    socialLinks[] { platform, url },
    privacyLink,
    termsLink,
  }
`;
