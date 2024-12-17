import { defineType } from "sanity";

export const displays = defineType({
  name: "displays",
  title: "Displays",
  type: "document",
  fields: [
    { name: "id", title: "ID", type: "number" },
    { name: "name", title: "Name", type: "string" },
    { name: "description", title: "Description", type: "string" },
    { name: "file", title: "File", type: "string" },
    { name: "createdAt", title: "Created At", type: "string" },
    { name: "updatedAt", title: "Updated At", type: "string" },
  ],
});
