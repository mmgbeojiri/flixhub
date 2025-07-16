"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const API_URL:string = '/api/search';


export default function Home() {
  const router = useRouter();
  const [inputText, setInputText] = useState<string>("");
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <h1>Flixhub</h1>
      <div className="flex-row flex w-screen p-10">
      <input type="text" onChange={(e) => setInputText(e.target.value)} className="flex-9 !border-r-0 !rounded-r-none" placeholder="Search" />
      <input type="submit" onClick={
        (e) => {
          e.preventDefault();
          router.push(`/search?q=${encodeURIComponent(inputText)}`);
        }} className="flex-1 !border-l-0 !rounded-l-none !bg-blue-500 !text-slate-50" value="Search"/>
      </div>
      </div>
  );
}
