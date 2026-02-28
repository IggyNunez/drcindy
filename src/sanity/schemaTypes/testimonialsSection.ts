import { defineType, defineField } from "sanity";

export const testimonialsSection = defineType({
  name: "testimonialsSection",
  title: "Testimonials Section",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Section Heading", type: "string" }),
  ],
});
