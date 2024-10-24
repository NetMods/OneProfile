import axios, { isAxiosError } from "@/app/api/axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username } = await request.json();
  try {
    const url = `/api/v1/scrap/geeksforgeeks`;
    const response = await axios.post(url, { username });

    return NextResponse.json(
      {
        success: true,
        message: "Succesfully fetched",
        data: response.data.scrappedData,
      },
      { status: 200 }
    );
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response && error.response.status === 404) {
        return NextResponse.json(
          {
            success: false,
            message: "Failed to fetch GeeksForGeek profile data.",
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
