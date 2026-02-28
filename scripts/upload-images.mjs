/**
 * Upload local images to Sanity and patch them into existing documents.
 * Maps the exact same images used as hardcoded fallbacks in the components.
 *
 * Usage: node scripts/upload-images.mjs
 */
import { createClient } from "@sanity/client";
import { createReadStream } from "fs";
import path from "path";

const client = createClient({
  projectId: "mlta2n8a",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const PUBLIC = path.resolve("public");

async function uploadImage(filePath) {
  const fullPath = path.join(PUBLIC, filePath);
  const ext = path.extname(filePath).slice(1);
  const contentType =
    ext === "svg" ? "image/svg+xml" :
    ext === "webp" ? "image/webp" :
    ext === "png" ? "image/png" :
    "image/jpeg";

  console.log(`  Uploading ${filePath}...`);
  const asset = await client.assets.upload("image", createReadStream(fullPath), {
    filename: path.basename(filePath),
    contentType,
  });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

async function patchDoc(docId, field, imageRef) {
  await client.patch(docId).set({ [field]: imageRef }).commit();
  console.log(`  ✓ Patched ${docId} → ${field}`);
}

async function main() {
  // ── Hero Section ──
  console.log("\n📸 Hero Section");
  const hero = await client.fetch(`*[_type == "heroSection"][0]{ _id }`);
  if (hero) {
    const heroImage = await uploadImage("/images/dr-cindy-hero.png");
    await patchDoc(hero._id, "heroImage", heroImage);

    const heroBackground = await uploadImage("/images/city-skyline-new.png");
    await patchDoc(hero._id, "heroBackground", heroBackground);

    const storyImage = await uploadImage("/images/lemonade-stand.webp");
    await patchDoc(hero._id, "storyImage", storyImage);

    const helpImage = await uploadImage("/images/cindy-combined.png");
    await patchDoc(hero._id, "helpImage", helpImage);

    const helpMobileImage = await uploadImage("/images/cindy-mobile.png");
    await patchDoc(hero._id, "helpMobileImage", helpMobileImage);
  }

  // ── About Section ──
  console.log("\n📸 About Section");
  const about = await client.fetch(`*[_type == "aboutSection"][0]{ _id }`);
  if (about) {
    const photo = await uploadImage("/images/about-cindy.png");
    await patchDoc(about._id, "photo", photo);
  }

  // ── Books ──
  console.log("\n📸 Books");
  const books = await client.fetch(`*[_type == "book"] | order(order asc) { _id, title }`);
  for (const book of books) {
    if (book.title === "Sell Yourself") {
      const cover = await uploadImage("/images/book-one.png");
      await patchDoc(book._id, "coverImage", cover);
    } else if (book.title === "Every Job Is a Sales Job") {
      const cover = await uploadImage("/images/book-two.png");
      await patchDoc(book._id, "coverImage", cover);
    }
  }

  // ── Work Together Section ──
  console.log("\n📸 Work Together Section");
  const workTogether = await client.fetch(`*[_type == "workTogetherSection"][0]{ _id }`);
  if (workTogether) {
    const photo = await uploadImage("/images/cindy-sitting-vignette.png");
    await patchDoc(workTogether._id, "photo", photo);
  }

  // ── Book Speaking Section ──
  console.log("\n📸 Book Speaking Section");
  const bookSpeaking = await client.fetch(`*[_type == "bookSpeakingSection"][0]{ _id }`);
  if (bookSpeaking) {
    const bg = await uploadImage("/images/image-94-book.png");
    await patchDoc(bookSpeaking._id, "backgroundImage", bg);
  }

  // ── Media Logos ──
  console.log("\n📸 Media Logos");
  const logos = await client.fetch(`*[_type == "mediaLogo"] | order(order asc) { _id, name }`);
  const logoMap = {
    Forbes: "/images/forbes-logo.png",
    TIME: "/images/time-logo.png",
    "Harvard Business Review": "/images/harvard-logo.png",
    "Thrive Global": "/images/thrive-global-logo.png",
    "Business.com": "/images/business-logo.png",
  };
  for (const logo of logos) {
    const file = logoMap[logo.name];
    if (file) {
      const img = await uploadImage(file);
      await patchDoc(logo._id, "logo", img);
    }
  }

  // ── Site Settings (Logos) ──
  console.log("\n📸 Site Settings");
  const settings = await client.fetch(`*[_type == "siteSettings"][0]{ _id }`);
  if (settings) {
    const siteLogo = await uploadImage("/images/cindy-site-logo.svg");
    await patchDoc(settings._id, "siteLogo", siteLogo);

    const footerLogo = await uploadImage("/images/cindy-site-logo-footer.svg");
    await patchDoc(settings._id, "footerLogo", footerLogo);
  }

  console.log("\n✅ All images uploaded and patched!");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
