import { defineType, defineField } from "sanity";

export const mediaLogo = defineType({
  name: "mediaLogo",
  title: "Media Logo",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Publication Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "url", title: "Link (optional)", type: "url" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
