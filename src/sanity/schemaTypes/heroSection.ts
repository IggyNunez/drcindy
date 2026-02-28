import { defineType, defineField } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({ name: "titleLine1", title: "Title Line 1", type: "string" }),
    defineField({ name: "titleLine2", title: "Title Line 2", type: "string" }),
    defineField({ name: "titleLine3", title: "Title Line 3", type: "string" }),
    defineField({ name: "titleLine4", title: "Title Line 4 (Gold)", type: "string" }),
    defineField({ name: "heroBodyText", title: "Hero Body Text", type: "text" }),
    defineField({ name: "heroVideoLabel", title: "Video Link Label", type: "string" }),
    defineField({ name: "heroTagline", title: "Hero Tagline", type: "string" }),
    defineField({
      name: "heroCta",
      title: "Hero CTA Button",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Button Label", type: "string" }),
        defineField({ name: "href", title: "Button Link", type: "string" }),
      ],
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image (Dr. Cindy)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroBackground",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "youtubeVideoId", title: "YouTube Video ID", type: "string" }),
    defineField({ name: "storyHeading", title: "Story Section Heading", type: "string" }),
    defineField({
      name: "storyParagraphs",
      title: "Story Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "storyImage",
      title: "Story Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "dailySalesHeading", title: "Daily Sales Heading", type: "string" }),
    defineField({ name: "dailySalesSubheading", title: "Daily Sales Subheading", type: "string" }),
    defineField({ name: "dailySalesBody", title: "Daily Sales Body Text", type: "text" }),
    defineField({ name: "pullQuote", title: "Pull Quote", type: "text" }),
    defineField({ name: "helpHeading", title: "Help Section Heading", type: "string" }),
    defineField({ name: "helpBody", title: "Help Section Body", type: "text" }),
    defineField({
      name: "helpImage",
      title: "Help Section Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "helpMobileImage",
      title: "Help Section Mobile Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "helpCta",
      title: "Help Section CTA",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Button Label", type: "string" }),
        defineField({ name: "href", title: "Button Link", type: "string" }),
      ],
    }),
    defineField({
      name: "helpMobileCta",
      title: "Help Section Mobile CTA",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Button Label", type: "string" }),
        defineField({ name: "href", title: "Button Link", type: "string" }),
      ],
    }),
  ],
});
