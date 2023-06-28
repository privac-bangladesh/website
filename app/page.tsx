import { Navbar } from "./components/Navbar";
import Image from "next/image";
import { NumberStats } from "./components/NumberStats";

export default function Home() {
  return (
    <main>
      <div className="
			2xl:bg-black
			xl:bg-green-600
			lg:bg-yellow-400
			 md:bg-red-500
			  sm:bg-slate-700 
				">
        <h1 className="text-blue-200">Current width</h1>
      </div>
      <Navbar />

      {/* Screen one */}
      <div className="flex w-full flex-col md:flex-row lg:w-10/12 xl:w-8/12 justify-evenly m-auto my-24 gap-4 sm:gap-0">

        <div className="grid place-content-center">
          <Image
            src="/images/app_image.png"
            alt="Picture of the application"
            width={500}
            height={500}
          />
        </div>

        <div className="grid place-content-center">
          <Image
            src="/svg/logo_black.svg"
            alt="PrivaC logo"
            width={190}
            height={190}
          />
          <h1 className="text-5xl font-bold text-black">fights</h1>
          <h1 className="text-5xl font-bold text-black">cybercrimes</h1>
        </div>

      </div>

      <div className="bg-rose-800 rounded-3xl lg:w-10/12 xl:w-8/12 m-auto">
        <div className="bg-black rounded-3xl p-5 py-40 overflow-hidden md:grid">
          <div className="flex w-10/12 m-auto flex-col md:flex-row">
            <div className="text-neutral-50 md:w-1/2">
              <div className="">
                <h1 className="text-3xl font-bold">In Bagladesh,</h1>
                <h1 className="text-5xl font-bold">10,000,000</h1>
                <h1 className="text-3xl font-bold">Cybercrime cases are reported nation wide.</h1>
              </div>
            </div>
            <div className="md:w-1/2">
              <h1 className="text-neutral-50">Image goes here</h1>
            </div>
          </div>
        </div>
        <div className="bg-rose-800 p-5 py-20 grid rounded-3xl mt-4">
          <div className="flex flex-col-reverse gap-8 md:flex-row w-10/12 m-auto">
            <div className="md:w-1/2 ">
              <Image
                src="/svg/people.svg"
                width={300}
                height={300}
                alt="People Graphic"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-2xl font-bold text-neutral-50">But only</h1>
              <h1 className="text-5xl font-bold text-neutral-50">19% of victims</h1>
              <h1 className="text-2xl font-bold text-neutral-50">seek legal help.</h1>
            </div>

          </div>
        </div>
      </div>

      <div className="my-24 flex flex-col gap-4 md:flex-row md:gap-3 lg:w-1/2 md:w-10/12 md:mx-auto md:justify-center">
        <Image
          className="m-auto md:m-0"
          src="/svg/logo_black.svg"
          alt="PrivaC logo"
          width={200}
          height={200}
        />
        <h1 className="text-3xl font-semibold m-auto md:mx-0 w-10/12 md:w-8/12 xl:w-5/12">PrivaC fights cybercrimes with victims.</h1>
      </div>

      <div className="">
        <NumberStats text="Successful cases" number={300} plus={true}/>
        <NumberStats text="Professional responders" number={10} plus={false}/>
        <NumberStats text="Partering organizations" number={20} plus={true}/>
      </div>

    </main>
  )
}
