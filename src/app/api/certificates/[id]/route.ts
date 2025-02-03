import { NextResponse } from "next/server";
import { supabase } from "../../../../../utils/supabaseClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(req: Request, { params: paramsPromise }: Props) {
  try {
    const params = await paramsPromise;
    if (!params || !params.id) {
      return NextResponse.json(
        { error: "Missing ID parameter" },
        { status: 400 }
      );
    }

    console.log("Certificate ID:", params.id);
    const { data, error } = await supabase
      .from("certificates")
      .select("*")
      .eq("certId", params.id)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
