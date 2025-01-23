import { NextResponse } from "next/server"
import dbConnect from "@/lib/mongodb"
import LedgerEntry from "@/models/LedgerEntry"

export async function GET() {
  await dbConnect()
  const entries = await LedgerEntry.find({}).sort({ date: -1 })
  return NextResponse.json(entries)
}

export async function POST(request: Request) {
  const body = await request.json()
  await dbConnect()
  const newEntry = new LedgerEntry(body)
  await newEntry.save()
  return NextResponse.json(newEntry, { status: 201 })
}

