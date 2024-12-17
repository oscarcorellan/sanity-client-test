import { defineType } from "sanity";

export const insurances = defineType({
  name: "insurances",
  title: "Insurances",
  type: "document",
  fields: [
    { name: "id", title: "ID", type: "number" },
    { name: "name", title: "Name", type: "string" },
    { name: "createdAt", title: "Created At", type: "string" },
    { name: "updatedAt", title: "Updated At", type: "string" },
  ],
});
