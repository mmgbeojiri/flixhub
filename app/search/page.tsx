"use client"
import { useEffect, useState } from "react";
import Navbar from "../navbar";
import axios, { AxiosResponse } from "axios";
import { useSearchParams } from "next/navigation";
interface Entry {
    text: string;
    link: string;
    image: string;
}

const API_URL: string = '/api/search';

let debounce = false;
function SendPostRequest(url: string) {
    let plusUrl: string = url.replaceAll(" ", "+");
    axios.post(API_URL, { "url": plusUrl });
}
export default function Search() {
    const searchQuery = useSearchParams().get('q') || '';
    let [entries, setEntries] = useState<Entry[]>([/*
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
        }*/
    ]);


    useEffect(() => {
        if (searchQuery) {
            axios.post(API_URL, { "url": searchQuery })
                .then((response: AxiosResponse<Entry[]>) => {
                    axios.get(API_URL)
                        .then((response: AxiosResponse<Entry[]>) => {
                            setEntries(response.data);
                            if (response.data.length == 0) {
                                console.log("No entries found for the search query.");
                            }

                        })
                }).catch((error) => {
                    console.error('Error fetching data from Clientside:', error);
                }).finally(() => {
                    console.log("Finished fetching data: entries: ", entries);
                })
        }
    }, [searchQuery]);




    return (
        <>
            <Navbar />
            <div className="grid grid-cols-3 m-5 gap-4">
                {
                    entries.length == 0 ? <span>Loading...</span> : <></>
                }
                {
                    entries.map((entry, index) => (
                        <div key={index} className="entry">
                            <a href={entry.link} rel="noopener noreferrer">
                                <p>{entry.text}</p>
                                <img src={entry.image} alt={entry.text} />
                            </a>
                        </div>
                    ))

                }
            </div>
        </>


    );
}
