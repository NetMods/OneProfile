import axios from "../../axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { username } = await request.json();

    const url = `/api/v1/scrap/codeforces`;

    const { data } = await axios.post(url, { username });

    return NextResponse.json(
      {
        success: true,
        message: "yeaah bitch",
        data: data.scrappedData,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to fetch Codeforces profile data.",
          error: error,
        },
        { status: 500 }
      );
    }
  }
}
