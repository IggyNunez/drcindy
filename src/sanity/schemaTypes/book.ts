import { defineType, defineField } from "sanity";

export const book = defineType({
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Book Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "buyLink", title: "Buy Link", type: "url" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
