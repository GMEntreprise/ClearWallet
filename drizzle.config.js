import { loadEnvConfig } from "@next/env";
import { cwd } from "node:process";

loadEnvConfig(cwd());

const config = {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://clearwalletdb_owner:t3YlZ0LHAfdN@ep-shiny-darkness-a8wvro9h.eastus2.azure.neon.tech/clearwalletdb?sslmode=require",
    connectionString:
      "postgresql://clearwalletdb_owner:t3YlZ0LHAfdN@ep-shiny-darkness-a8wvro9h.eastus2.azure.neon.tech/clearwalletdb?sslmode=require",
  },
};

export default config;
