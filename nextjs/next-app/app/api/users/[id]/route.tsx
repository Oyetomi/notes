import schema from "@/app/users/schema";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params }: Props) {
  if (params.id > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  return NextResponse.json({ id: params.id, name: "John" }, { status: 200 });
}

export async function PUT(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  if (params.id > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  return NextResponse.json({ id: params.id, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  if (params.id > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  return NextResponse.json({});
}
