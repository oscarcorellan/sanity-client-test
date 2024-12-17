import { type SchemaTypeDefinition } from "sanity";
import { frame } from "./frames";
import { accessory } from "./accessories";
import { offerings } from "./offerings";
import { displays } from "./displays";
import { practices } from "./practices";
import { offeringOnPractices } from "./offeringOnPractices";
import { displayOnPractices } from "./displayOnPractices";
import { insuranceOnPractices } from "./insuranceOnPractices";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    frame,
    accessory,
    practices,
    offerings,
    displays,
    offeringOnPractices,
    displayOnPractices,
    insuranceOnPractices,
  ],
};
