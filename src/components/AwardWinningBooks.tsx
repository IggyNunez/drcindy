"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface BooksProps {
  sectionData?: {
    heading?: string;
    description?: string;
  };
  books?: Array<{
    _id: string;
    title: string;
    subtitle?: string;
    coverImage?: string;
    buyLink?: string;
    order: number;
  }>;
}

const defaultBooks = [
  {
    title: "Sell Yourself",
    subtitle: "How to Create, Live, and Sell a Powerful Personal Brand",
    image: "/images/book-one.png",
    buyLink: "/books/sell-yourself",
  },
  {
    title: "Every Job Is a Sales Job",
    subtitle: "How to Use the Art of Selling to Win at Work",
    image: "/images/book-two.png",
    buyLink: "/books/every-job",
  },
];

// Fallback local images keyed by book title (for when Sanity has no image uploaded)
const bookImageFallbacks: Record<string, string> = {
  "Sell Yourself": "/images/book-one.png",
  "Every Job Is a Sales Job": "/images/book-two.png",
};

interface BookCardProps {
  book: {
    title: string;
    subtitle?: string;
    image?: string;
    coverImage?: string;
    buyLink?: string;
  };
  index: number;
}

function BookCard({ book, index }: BookCardProps) {
  const imageSrc = book.coverImage || book.image || bookImageFallbacks[book.title] || "/images/book-one.png";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      className="flex flex-col items-center"
    >
      {/* Book image with embedded badges */}
      <motion.div
        className="relative w-[320px] h-[300px] md:w-[420px] md:h-[380px] lg:w-[520px] lg:h-[440px] mb-8 translate-x-[65px] md:translate-x-0"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={imageSrc}
          alt={`${book.title} - ${book.subtitle || ""}`}
          fill
          className="object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
          sizes="(max-width: 768px) 320px, (max-width: 1024px) 420px, 520px"
        />
      </motion.div>

      {/* Buy Now button */}
      <motion.a
        href={book.buyLink}
        className="inline-flex items-center justify-center gap-3 bg-[#FFC300] border-[0.5px] border-black text-black font-medium text-[14px] md:text-[16px] lg:text-[20px] leading-[30px] tracking-[0.02em] uppercase px-5 md:px-[30px] lg:px-[40px] py-3 lg:py-[19px] transition-all duration-300 hover:brightness-95 shadow-[0_8px_24px_rgba(255,195,0,0.3)] whitespace-nowrap md:mr-[40%]"
        style={{ fontFamily: "var(--font-montserrat)" }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Buy Now
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18m0 0l-4-4m4 4l-4 4" />
        </svg>
      </motion.a>
    </motion.div>
  );
}

export default function AwardWinningBooks({ sectionData, books: sanityBooks }: BooksProps) {
  const items = sanityBooks?.length ? sanityBooks : defaultBooks;

  return (
    <section className="relative bg-white overflow-hidden py-8 md:py-24 lg:py-32">
      {/* Gold swirl decoration behind */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <Image
          src="/images/gold-swirl-about.svg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-[60px]">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-black text-[30px] md:text-[clamp(2rem,5vw,60px)] font-semibold leading-[1] uppercase tracking-normal mb-6 md:mb-8"
          style={{ fontFamily: "var(--font-josefin)" }}
        >
          {sectionData?.heading || "Award-Winning Books"}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-left md:text-center text-black text-[16px] md:text-[19px] lg:text-[22px] leading-[1.7] md:leading-[40px] max-w-[1039px] mx-auto mb-12 md:mb-16 lg:mb-20"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          {sectionData?.description || "Dr. Cindy\u2019s bestselling books are your personal masterclass in turning everyday moments into sales opportunities. Whether you\u2019re selling a product, an idea, or yourself, these books provide you with practical, actionable advice to reframe sales as a tool to enable you to take control and create the success you want."}
        </motion.p>

        {/* Books grid */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-8 md:gap-4 lg:gap-8 xl:gap-12 md:translate-x-[10%]">
          {items.map((book, i) => (
            <BookCard
              key={('_id' in book ? book._id : book.title)}
              book={{
                title: book.title,
                subtitle: book.subtitle,
                image: 'image' in book ? book.image : undefined,
                coverImage: 'coverImage' in book ? book.coverImage : undefined,
                buyLink: book.buyLink,
              }}
              index={i}
            />
          ))}
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#cba465] to-transparent mt-16 md:mt-24 lg:mt-32 origin-center gold-line-shine"
          style={{ boxShadow: '0 0 8px 1px rgba(255, 195, 0, 0.2)' }}
        />
      </div>
    </section>
  );
}
