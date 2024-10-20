import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { username } = await request.json();

    const { data } = await axios.post("http://localhost:5000/api/v1/scrap/leetcode", {
      username
    })

    return NextResponse.json({
      success: true,
      message: "yeaah bitch",
      data: data.scrappedData
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({
        success: false,
        message: "Failed to fetch LeetCode profile data.",
        error: error,
      });
    }
  }
}
