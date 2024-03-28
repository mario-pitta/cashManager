/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

const env = dotenv.config({ path: ".env" });

if (!env) {
	throw new Error("No environment variables loaded");
}

const supabaseUrl = env.parsed?.SUPABASE_URL as string;
const supabaseKey = env.parsed?.SUPABASE_KEY as string;

const supabase = createClient(supabaseUrl, supabaseKey);

@Injectable()
export class DataBase {
	supabase: SupabaseClient = supabase;

	constructor() {
		// this.supabase = createClient(supabaseUrl, supabaseKey);
	}
}
