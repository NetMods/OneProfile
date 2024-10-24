import axios, { isAxiosError } from "../../axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { username } = await request.json();
    const url = `/api/v1/scrap/codechef`;
    const { data } = await axios.post(url, { username });

    return NextResponse.json(
      {
        success: true,
        message: `yeaah bitch`,
        data: data.scrappedData,
      },
      { status: 200 }
    );
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response && error.response.status === 404) {
        return NextResponse.json(
          {
            success: false,
            message: "Failed to fetch Code Chef profile data.",
            error: error.response.data.error,
          },
          { status: 404 }
        );
      }
    }
    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: "An unexpected error occurred.",
          error: error.message,
        },
        { status: 500 }
      );
    }
  }
}
