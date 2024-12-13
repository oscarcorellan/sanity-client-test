import { defineType } from "sanity";

export const offerings = defineType({
  name: "offerings",
  title: "Oferrings",
  type: "document",
  fields: [
    { name: "id", title: "ID", type: "number" },
    { name: "name", title: "Name", type: "string" },
    { name: "type", title: "Type", type: "string" },
    { name: "createdAt", title: "Created At", type: "string" },
    { name: "updatedAt", title: "Updated At", type: "string" },
  ],
});
