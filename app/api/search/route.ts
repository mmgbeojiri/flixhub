    // app/api/users/route.ts
    import { NextResponse } from 'next/server';
    import type { NextRequest } from 'next/server';
    interface requestBody {
      url: string;
    }
    export async function GET(request: NextRequest) {
      // Handle GET requests to /api/users
      // Access request data (e.g., query parameters, headers) from 'request'

      // Return a Next.js Response object
      return NextResponse.json("ahhhh");
    }

    export async function POST(request: NextRequest) {
      // Handle POST requests to /api/users
      const { url }: requestBody = await request.json(); // Parse request body as JSON

      // Perform backend logic (e.g., save data to a database)
      console.log('Received data:', url);

      return NextResponse.json({ message: 'Message got created successfully', data: url });
    }