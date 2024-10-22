import axios from "../../axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { username } = await request.json();
    try {
        const url = `/api/v1/scrap/geeksforgeek`;
        const {data} =  await axios.post(url,{ username })
        return NextResponse.json({
            success : true,
            message : "yeah Bitch",
            data : data.scrappedData
        },{status:200})
    } catch (error) {
        if (error instanceof Error) {
        return NextResponse.json({
            success: false,
            message: "Failed to fetch GeeksForGeek profile data.",
            error: error,
        },{status:500});
        }
    }
}
