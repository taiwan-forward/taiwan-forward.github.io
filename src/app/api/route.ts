import { NextResponse } from "next/server";

// Static JSON payload — compatible with both the development preview and
// the GitHub Pages static export (`output: "export"`).
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({
    project: "Taiwan Forward 台灣向前",
    tagline: "Understand Today. Improve Tomorrow.",
    independent: true,
    nonpartisan: true,
    nonCommercial: true,
    evidenceBased: true,
  });
}
