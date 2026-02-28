import { defineType, defineField } from "sanity";

export const bookSpeakingSection = defineType({
  name: "bookSpeakingSection",
  title: "Book Dr. Cindy Section",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Section Heading", type: "string" }),
    defineField({ name: "introText", title: "Intro Text", type: "text" }),
    defineField({ name: "bodyText", title: "Body Text", type: "text" }),
    defineField({
      name: "speakingCategories",
      title: "Speaking Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Category Label", type: "string" }),
          ],
        },
      ],
    }),
    defineField({ name: "youtubeVideoId", title: "YouTube Video ID", type: "string" }),
    defineField({ name: "testimonialQuote", title: "Testimonial Quote", type: "text" }),
    defineField({ name: "testimonialAttribution", title: "Testimonial Attribution", type: "string" }),
    defineField({
      name: "cta",
      title: "CTA Button",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Button Label", type: "string" }),
        defineField({ name: "href", title: "Button Link", type: "string" }),
      ],
    }),
    defineField({ name: "newsletterHeading", title: "Newsletter Heading", type: "string" }),
    defineField({ name: "newsletterDescription", title: "Newsletter Description", type: "string" }),
    defineField({
      name: "backgroundImage",
      title: "Background Texture Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
