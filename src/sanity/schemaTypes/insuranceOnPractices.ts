import { defineType } from "sanity";

export const insuranceOnPractices = defineType({
  name: "insuranceOnPractices",
  title: "Insurance on Practices",
  type: "document",
  fields: [
    {
      name: "practiceId",
      title: "Practice",
      type: "reference",
      to: [{ type: "practices" }],
    },
    {
      name: "insuranceId",
      title: "Insurance",
      type: "reference",
      to: [{ type: "insurances" }],
    },
  ],
});
