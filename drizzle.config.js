import { loadEnvConfig } from "@next/env";
import { cwd } from "node:process";

loadEnvConfig(cwd());

const config = {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
    connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
};

export default config;
