import { defineField, defineType } from "sanity";

export const ourWorkPage = defineType({
  name: "ourWorkPage",
  title: "Our Work Page",
  type: "document",
  fields: [
    defineField({
      name: "bio",
      title: "Bio Section",
      type: "object",
      fields: [
        defineField({
          name: "stats",
          title: "Stats",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "value",
                  title: "Value",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "label",
                  title: "Label",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
              ],
              preview: {
                select: { title: "value", subtitle: "label" },
              },
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
          name: "quote",
          title: "Quote",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "quoteAttribution",
          title: "Quote Attribution",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "paragraphs",
          title: "Bio Paragraphs",
          type: "array",
          of: [{ type: "text", rows: 4 }],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Our Work Page",
      subtitle: "Bio section content",
    }),
  },
});
