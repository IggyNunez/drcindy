import { defineType, defineField } from "sanity";

export const aboutSection = defineType({
  name: "aboutSection",
  title: "About Dr. Cindy Section",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Section Heading", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
    defineField({
      name: "bodyParagraphs",
      title: "Body Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({ name: "calloutQuote", title: "Callout Quote", type: "string" }),
    defineField({ name: "closingParagraph", title: "Closing Paragraph", type: "text" }),
    defineField({
      name: "photo",
      title: "Dr. Cindy Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "cta",
      title: "CTA Button",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Button Label", type: "string" }),
        defineField({ name: "href", title: "Button Link", type: "string" }),
      ],
    }),
  ],
});
