"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [inputText, setInputText] = useState<string>("");
  return (
    <div className="flex w-screen flex shadow-sm justify-between px-5 h-15 gap-4 items-center flex-row">
      <h1 className="!py-1 !px-2">Flixhub</h1>
      <a href="/" className="!py-1 !px-2">Home</a>
      <div className="flex-row flex w-screen ">
      <input type="text" className="flex-9 !border-r-0 !rounded-r-none" placeholder="Search" />
<input type="submit" onClick={
        (e) => {
          e.preventDefault();
          router.push(`/search?q=${encodeURIComponent(inputText)}`);
        }} className="flex-1 !border-l-0 !rounded-l-none !bg-blue-500 !text-slate-50" value="Search"/>      </div>
      </div>
  );
}
