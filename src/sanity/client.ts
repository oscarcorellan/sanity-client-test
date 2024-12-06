import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "your-project-id",
  dataset: "your-dataset-name",
  useCdn: true,
  apiVersion: "2024-12-06",
};
const client = createClient(config);

const data = await client.fetch<number>(`count(*)`);
console.log(`Number of documents: ${data}`);
