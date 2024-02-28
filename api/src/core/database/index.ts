/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yutpdnpultyjtyexsebh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dHBkbnB1bHR5anR5ZXhzZWJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwNjQzNDcsImV4cCI6MjAyNDY0MDM0N30.gd_2Mb-vyHO_5sqQvErdfDHetFveJOuohumhPVAGrIQ";
const supabase = createClient(supabaseUrl, supabaseKey);


@Injectable()
export class DataBase {
    supabase = supabase;
}
