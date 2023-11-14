import User from "@/app/models/user";
import { connect } from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const data = await req.json();
    const res = await User.create(data);
    console.log(data, res);
    return NextResponse.json(res, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Input valid data" }, { status: 500 });
  }
}
