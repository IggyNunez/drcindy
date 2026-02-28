"use client";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { StudioLogo, StudioNavbar } from "./src/sanity/StudioLogo";

export default defineConfig({
  name: "dr-cindy",
  title: "Dr. Cindy",
  projectId: "mlta2n8a",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  basePath: "/studio",
  icon: StudioLogo,
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
});
