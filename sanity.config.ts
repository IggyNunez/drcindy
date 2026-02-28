"use client";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "dr-cindy",
  title: "Dr. Cindy McGovern",
  projectId: "mlta2n8a",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  basePath: "/studio",
});
