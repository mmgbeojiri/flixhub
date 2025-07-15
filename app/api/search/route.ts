    // app/api/users/route.ts
    import { NextResponse } from 'next/server';
    import type { NextRequest } from 'next/server';

    export async function GET(request: NextRequest) {
      // Handle GET requests to /api/users
      // Access request data (e.g., query parameters, headers) from 'request'

      // Return a Next.js Response object
      return NextResponse.json("ahhhh");
    }

    export async function POST(request: NextRequest) {
      // Handle POST requests to /api/users
      const body = await request.json(); // Parse request body as JSON

      // Perform backend logic (e.g., save data to a database)
      console.log('Received data:', body);

      return NextResponse.json({ message: 'User created successfully', data: body });
    }