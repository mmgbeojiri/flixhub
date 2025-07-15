"use client"
import { useState } from "react";
import Navbar from "../navbar";
interface Entry {
    text: string;
    link: string;
    image: string;
}


export default function Search() {
    let [entries, setEntries] = useState<Entry[]>([
        {
            text: "Entry 1",
            link: "https://www.google.com",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"
        },
        {
            text: "Entry 2",
            link: "https://www.google.com",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"
        },
        {
            text: "Entry 3",
            link: "https://www.google.com",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"
        },
        {
            text: "Entry 4",
            link: "https://www.google.com",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"
        }
    ]);
  return (
    <>
    <Navbar />
    <div className="grid grid-cols-3 m-5 gap-4">
    {entries.map((entry, index) => (
        <div key={index} className="entry">
            <a href={entry.link} target="_blank" rel="noopener noreferrer">
                <img src={entry.image} alt={entry.text} />
                <p>{entry.text}</p>
            </a>
        </div>
    ))}
    </div>
    </>
    

  );
}
