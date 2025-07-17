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

const mode = "pn";

let urlPrefix:string;
let urlMoviePrefix: string;
let urlShowsPrefix: string;

if (mode == "onl") { 
  urlPrefix = "https://lookmovie.onl/?s="
} else if (mode == "pn") {
  urlMoviePrefix = "https://ww1.lookmovie.pn/movies/search/?q="
  urlShowsPrefix = "https://ww1.lookmovie.pn/shows/search/?q="
}
// We use .onl because .to is blocked on school networks.
let searchUrl: string = "";
let entries: Entry[] = [];

export async function GET(request: NextRequest) {
  // Handle GET requests to /api/users
  // Access request data (e.g., query parameters, headers) from 'request'
  // wait for entries to be populated

  // Return a Next.js Response object
  return NextResponse.json(entries);
}

export async function POST(request: NextRequest) {
  // Handle POST requests to /api/users
  entries = [];
  const { url }: requestBody = await request.json(); // Parse request body as JSON
  if (mode == "onl") {
  searchUrl = urlPrefix + url;
  }
  if (mode == "pn") {
    searchUrl = urlMoviePrefix + url;
  }
  // Perform backend logic (e.g., save data to a database)
  console.log('Received data:', searchUrl);

  await axios.get(searchUrl).then((response) => {
    let $ = cheerio.load(response.data);
    
    if (mode == "onl") {
    $("#main article").each((index, element) => {
        let newEntry: Entry = {
          text: $(element).find(".entry-title").text() || "",
          link: $(element).find("a").attr("href") || "",
          image: $(element).find("div img").attr("src") || ""
        }
        entries.push(newEntry);
        console.log(newEntry);
      });
    }

    if (mode == "pn") {
      $(".movie-item-style-2").each((index, element) => {
        let newEntry: Entry = {
          text: $(element).find(".mv-item-infor h6 a").text() || "",
          link: $(element).find(".mv-item-infor h6 a").attr("href") || "",
          image: $(element).find(".image__placeholder a img").attr("src") || ""
          // engineering problem, the image is in base 64. WHAT DO I DO

        }
        // place https://ww1.lookmovie.pn/ before the link
        newEntry.link = "https://ww1.lookmovie.pn" + newEntry.link;

        // covert base64 image to a url
        fetch(newEntry.image)
        .then(response => response.blob())
        .then(blob => {
            newEntry.image = URL.createObjectURL(blob);
        });
        

        entries.push(newEntry);
        console.log(newEntry);
      });
    }


  }).catch((error) => {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }).finally(() => {
      console.log("Finished fetching data");
  });



return NextResponse.json({ message: 'Message got created successfully', data: url });
}