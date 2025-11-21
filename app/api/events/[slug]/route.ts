import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Event, type IEvent } from '@/database';

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    console.log("slug from params:", slug);

    if (!slug || typeof slug !== "string" || slug.trim() === "") {
      return NextResponse.json(
        { message: "Invalid request: slug parameter is required" },
        { status: 400 }
      );
    }

    const normalized = slug.trim().toLowerCase();
    const SLUG_REGEX = /^[a-z0-9-]+$/;
    if (!SLUG_REGEX.test(normalized)) {
      return NextResponse.json(
        { message: "Invalid slug format. Use lowercase letters, numbers and hyphens only." },
        { status: 400 }
      );
    }

    await connectDB();
    const eventDoc = await Event.findOne({ slug: normalized }).exec();

    if (!eventDoc) {
      return NextResponse.json(
        { message: `Event with slug '${normalized}' not found` },
        { status: 404 }
      );
    }

    const { __v, ...sanitized } = eventDoc.toObject();

    return NextResponse.json(
      { message: "Event fetched successfully", event: sanitized },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/events/[slug] error:", error);
    return NextResponse.json(
      { message: "Failed to fetch event" },
      { status: 500 }
    );
  }
}
