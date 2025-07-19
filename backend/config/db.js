import { neon, NeonDbError } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();
const{PGHOST,PGDATABASE,PGUSER,PGPASSWORD} = process.env;

//connect using env variables
export const sql =neon(
    `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`
)

//this is sql connection will be used to run all queries
// postgresql://neondb_owner:npg_uYj41ewCrqsk@ep-small-sound-a8d9bwpd-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require
