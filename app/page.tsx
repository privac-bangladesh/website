import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <main>
			<Navbar/>
			<div className="
			2xl:bg-black
			xl:bg-green-600
			lg:bg-yellow-400
			 md:bg-red-500
			  sm:bg-slate-700 
				">
				a
			</div>
			{/* Screen one */}
			<div className="flex">

				<div>
					<h1>Image goes here</h1>
				</div>

				<div>
					<h1>Logo goes here</h1>
					<h1>fights</h1>
					<h1>cybercrimes</h1>
				</div>

			</div>

			{/* <div className="bg-rose-800 h-[1000px]">
				<div className="bg-neutral-950 h-[500px] rounded-full">
					<h1>In bagladesh, 10,000,000 Cybercrime cases are reported nation wide.</h1>
				</div>
				<div className="bg-rose-800">
					<h1>But only 19% of victims seek legal help.</h1>
				</div>
			</div> */}
    </main>
  )
}
