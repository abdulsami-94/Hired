import { NextResponse } from 'next/server';
import { AppStatus } from '@/types/status';

export async function GET() {
    const statusData: AppStatus = {
        online: true,
        version: "1.0.0",
        environment: "development"
    }
    return NextResponse.json(statusData);
}