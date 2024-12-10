import { defineType } from "sanity";

export const accessory = defineType({
  name: "accessory",
  title: "Accessory",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "price", title: "Price", type: "number" },
    { name: "availability", title: "Availability", type: "boolean" },
    {
      name: "frame",
      title: "Frame",
      type: "reference",
      to: [{ type: "frame" }],
      description: "Reference to the frame this accessory belongs to",
    },
  ],
});
