import { type SchemaTypeDefinition } from "sanity";
import { frame } from "./frames";
import { accessory } from "./accessories";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [frame, accessory],
};
