import { defineType } from "sanity";

export const displayOnPractices = defineType({
  name: "displayOnPractices",
  title: "Display on Practices",
  type: "document",
  fields: [
    {
      name: "practiceId",
      title: "Practice",
      type: "reference",
      to: [{ type: "practices" }],
    },
    {
      name: "displayId",
      title: "Display",
      type: "reference",
      to: [{ type: "displays" }],
    },
  ],
});
