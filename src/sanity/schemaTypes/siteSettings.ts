import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteLogo",
      title: "Site Logo (Header)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "footerLogo",
      title: "Footer Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "tagline", title: "Footer Tagline", type: "string" }),
    defineField({ name: "copyrightText", title: "Copyright Text", type: "string" }),
    defineField({
      name: "headerCta",
      title: "Header CTA Button",
      type: "object",
      fields: [
        defineField({ name: "label", title: "Button Label", type: "string" }),
        defineField({ name: "href", title: "Button Link", type: "string" }),
      ],
    }),
    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Link", type: "string" }),
            defineField({
              name: "children",
              title: "Dropdown Items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "label", title: "Label", type: "string" }),
                    defineField({ name: "href", title: "Link", type: "string" }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "Facebook", value: "facebook" },
                  { title: "Instagram", value: "instagram" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "YouTube", value: "youtube" },
                  { title: "TikTok", value: "tiktok" },
                  { title: "Twitter/X", value: "twitter" },
                ],
              },
            }),
            defineField({ name: "url", title: "URL", type: "url" }),
          ],
        },
      ],
    }),
    defineField({ name: "privacyLink", title: "Privacy Policy Link", type: "string" }),
    defineField({ name: "termsLink", title: "Terms & Conditions Link", type: "string" }),
  ],
});
