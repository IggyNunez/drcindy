import { defineType, defineField } from "sanity";

export const workTogetherSection = defineType({
  name: "workTogetherSection",
  title: "Work Together Section",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Section Heading", type: "string" }),
    defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
    defineField({ name: "body", title: "Body Text", type: "text" }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Service Label", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "photo",
      title: "Section Image",
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
