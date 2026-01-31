import {createClient} from "@supabase/supabase"

import dotenv from "dotenv";

dotenv.config();
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

export default supabase;
