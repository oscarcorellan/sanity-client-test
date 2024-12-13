import { type SchemaTypeDefinition } from "sanity";
import { frame } from "./frames";
import { accessory } from "./accessories";
import { offerings } from "./offerings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [frame, accessory, offerings],
};
