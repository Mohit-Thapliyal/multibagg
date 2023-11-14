import User from "@/app/models/user";
import { connect } from "@/app/utils/connect";
import { NextResponse } from "next/server";

export async function POST() {
  await connect();
  const res = await User.find();
  return NextResponse.json(res, { status: 200 });
}
