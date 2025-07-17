import Navbar from "../navbar";

export default function Movie() {
    return (
        <>
        <Navbar />
        <div className="flex flex-col p-5 gap-2 h-screen">
        <h1 className="text-left !p-2">Title</h1>
        <h2 className="p-2 border rounded bg-slate-50 border-slate-300 text-slate-600 font-bold">1994 - 119 min</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A delectus repellat laborum ratione aut mollitia quisquam ad necessitatibus tempora, eveniet beatae natus! Eaque autem rerum quis? Delectus saepe numquam maxime.</p>
        </div>
        </>
    )
}