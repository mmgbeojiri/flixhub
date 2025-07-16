"use client";
import Image from "next/image";
import axios from "axios";

function SendPostRequest(url: string) {
  let plusUrl: string = url.replaceAll(" ", "+");
  axios.post('/api/search', { "url": plusUrl });
}
export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <h1>Flixhub</h1>
      <div className="flex-row flex w-screen p-10">
      <input type="text" onSubmit={
        (e) => {
          e.preventDefault();
          SendPostRequest(e.target.value);
        }} className="flex-9 !border-r-0 !rounded-r-none" placeholder="Search" />
      <input type="submit"className="flex-1 !border-l-0 !rounded-l-none !bg-blue-500 !text-slate-50" value="Search"/>
      </div>
      </div>
  );
}
