import { defineType } from "sanity";

export const frame = defineType({
  name: "frame",
  title: "Frame",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "material", title: "Material", type: "string" },
    {
      name: "materialDescription",
      title: "Material Description",
      type: "string",
    },
    { name: "shape", title: "Shape", type: "string" },
    { name: "size", title: "Size", type: "string" },
    { name: "color", title: "Color", type: "string" },
    { name: "gender", title: "Gender", type: "string" },
    { name: "brand", title: "Brand", type: "string" },
    { name: "price", title: "Price", type: "number" },
    { name: "availability", title: "Availability", type: "boolean" },
    { name: "legacyId", title: "Legacy ID", type: "string" },
  ],
});
