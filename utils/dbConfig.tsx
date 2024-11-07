

import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { neon } from "@neondatabase/serverless";

const databaseUrl =
  "postgresql://clearwalletdb_owner:t3YlZ0LHAfdN@ep-shiny-darkness-a8wvro9h.eastus2.azure.neon.tech/clearwalletdb?sslmode=require";

if (!databaseUrl) {
  throw new Error("NEXT_PUBLIC_DATABASE_URL is not defined");
}
const sql = neon(
  "postgresql://clearwalletdb_owner:t3YlZ0LHAfdN@ep-shiny-darkness-a8wvro9h.eastus2.azure.neon.tech/clearwalletdb?sslmode=require"
);


export const db = drizzle(sql, { schema });
