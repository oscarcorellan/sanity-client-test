import { defineType } from "sanity";

export const offeringOnPractices = defineType({
  name: "offeringOnPractices",
  title: "Offering on Practices",
  type: "document",
  fields: [
    {
      name: "practiceId",
      title: "Practice",
      type: "reference",
      to: [{ type: "practices" }],
    },
    {
      name: "offeringId",
      title: "Offering",
      type: "reference",
      to: [{ type: "offerings" }],
    },
  ],
});
