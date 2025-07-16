// app/api/users/route.ts
import { url } from 'inspector';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as cheerio from 'cheerio'; 
import axios from 'axios';
interface requestBody {
  url: string;
}
interface Entry {
    text: string;
    link: string;
    image: string;
}
const urlPrefix: string = "https://lookmovie.onl/?s="
// We use .onl because .to is blocked on school networks.
let searchUrl: string = "";

export async function GET(request: NextRequest) {
  // Handle GET requests to /api/users
  // Access request data (e.g., query parameters, headers) from 'request'

  // Return a Next.js Response object
  return NextResponse.json("ahhhh");
}

export async function POST(request: NextRequest) {
  // Handle POST requests to /api/users
  const { url }: requestBody = await request.json(); // Parse request body as JSON
  searchUrl = urlPrefix + url;
  // Perform backend logic (e.g., save data to a database)
  console.log('Received data:', searchUrl);

  axios.get(searchUrl).then((response) => {
    $ = cheerio.load(response.data);

    let entries: Entry[] = [];
    $("#main article").each((index, element) => {
      let newEntry: Entry = {
        text: $(element).find(".entry-title").text() || "",
        link: $(element).find("a").attr("href") || "",
        image: $(element).find("div img").attr("src") || ""
      }
      entries.push(newEntry);
      console.log(newEntry);
    })

  return NextResponse.json({ message: 'Message got created successfully', data: url });
}