import { NextResponse } from "next/server";
// This is a GET request handler

export async function GET() {
    return NextResponse.json(
        {
            status: "alive",
            message: "The backend is breathing ... for now.",
            timestamp: new Date().toISOString()
        },
        {
            status: 200
        }
    );
}



