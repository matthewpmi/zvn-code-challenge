import connectMongoDB from "../../../../lib/mongodb";
import Movie from "../../../../models/movies";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title, date } = await request.json();
    await connectMongoDB();
    await Movie.create({ title, date });
    return NextResponse.json({ message: 'Movie added' })
  } catch (error) {
    return { status: 500, body: error }
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const movies = await Movie.find();
    return NextResponse.json({ movies })
  } catch (error) {
    return { status: 500, body: error }
  }
}