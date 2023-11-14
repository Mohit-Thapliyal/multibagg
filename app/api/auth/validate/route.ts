import User from "@/app/models/user";
import { connect } from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const {email} = await req.json();
    const data = await User.find({email});
    console.log(email, data);
    return NextResponse.json(data, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Input valid data" }, { status: 500 });
  }
}
