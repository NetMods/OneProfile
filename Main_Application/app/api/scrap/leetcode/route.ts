import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const username = data.username;

    return NextResponse.json({
      success: true,
      username
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({
        success: false,
        message: "Failed to fetch LeetCode profile data.",
        error: error.message,
      });
    }
  }
}
