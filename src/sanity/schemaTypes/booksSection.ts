import { defineType, defineField } from "sanity";

export const booksSection = defineType({
  name: "booksSection",
  title: "Books Section",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Section Heading", type: "string" }),
    defineField({ name: "description", title: "Section Description", type: "text" }),
  ],
});
