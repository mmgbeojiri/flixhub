import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <h1>Flixhub</h1>
      <div className="flex-col w-screen">
      <input type="text" className="flex-9" placeholder="Search" />
      <input type="submit" value="Search"/>
      </div>
      </div>
  );
}
