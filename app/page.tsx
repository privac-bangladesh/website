import { Navbar } from "./components/Navbar";
import Image from "next/image";
import { NumberStats } from "./components/NumberStats";
import { Quotes } from "./components/Quotes";
import Link from "next/link";
import { Sections } from "./components/Sections";
import { Portraits } from "./components/Portraits";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main>

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
              {/* Image needs to be better. just place holder.*/}
              <Image
                src="/images/globe.png"
                width={300}
                height={200}
                alt="Planet"
              />
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

      <div className="flex flex-col gap-14 md:flex-row lg:w-10/12 lg:m-auto xl:w-8/12 py-16">
        <NumberStats text="Successful cases" number={300} plus={true} />
        <NumberStats text="Professional responders" number={10} plus={false} />
        <NumberStats text="Partering organizations" number={20} plus={true} />
      </div>

      <div className="w-10/12 m-auto xl:w-8/12 my-32">
        <h1>Chart goes here</h1>
      </div>

      <div className="my-24">
        <Quotes
          text="Lorem ipsum dolor sit amet consectetur. Massa bibendum nunc praesent mollis semper dolor."
          author="Firstand Lastname"
        />
        <Quotes
          text="Lorem ipsum dolor sit amet consectetur. Massa bibendum nunc praesent mollis semper dolor."
          author="Firstand Lastname"
        />
      </div>

      <div className="w-10/12 m-auto xl:w-8/12">
        <h1 className="text-4xl font-bold my-6">Be a hero with PrivaC</h1>
        <Image
          src="/images/hero.png"
          width={1500}
          height={500}
          alt="Be a hero with PrivaC"
        />
        <div className="mt-6 md:flex xl:w-10/12 xl:mx-auto mb-24">
          <h1 className="text-2xl font-semibold md:w-1/2 xl:text-3xl">Become a PrivaC Responder</h1>
          <div className="my-4 md:w-1/2 md:my-0">
            <h1>In aliquam orci faucibus leo quam sed. Tempor placerat in scelerisque sit vitae nullam sagittis. Egestas tellus aenean massa tempor commodo molestie consequat. Aenean tristique accumsan et nisi nunc massa quis augue risus. Etiam elit ut ut tellus dictum ut.</h1>
            <Link href={"#"}>
              <h1 className="text-rose-950 font-bold">Learn more</h1>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Sections
          title="About us"
          boldText="Bangladesh's 1st cybercrime countermeasure services organization"
          regularText="In aliquam orci faucibus leo quam sed. Tempor placerat in scelerisque sit vitae nullam sagittis. Egestas tellus aenean massa tempor commodo molestie consequat. Aenean tristique accumsan et nisi nunc massa quis augue risus. Etiam elit ut ut tellus dictum ut."
        />
        <Sections
          title="Our mission"
          boldText="Bangladesh's 1st cybercrime countermeasure services organization"
          regularText="In aliquam orci faucibus leo quam sed. Tempor placerat in scelerisque sit vitae nullam sagittis. Egestas tellus aenean massa tempor commodo molestie consequat. Aenean tristique accumsan et nisi nunc massa quis augue risus. Etiam elit ut ut tellus dictum ut."
        />
      </div>

      <div className="w-10/12 m-auto xl:w-8/12 my-32">
        <h1 className="font-semibold text-rose-950 text-lg mb-4">Featured</h1>
        <Image
          src="/images/featured.png"
          width={2000}
          height={500}
          alt="Places featured."
        />
      </div>

      <div className="w-10/12 m-auto my-12 lg:w-8/12">
        <h1 className="font-semibold text-rose-950 text-lg mb-4 w-10/12  ">Meet the team</h1>
      </div>
      <div className="md:flex xl:w-12/12 2xl:w-10/12 xl:m-auto flex-wrap">
        <Portraits
          image={"danielchung"}
          name={" Daniel Chung"}
          description={"Orci suspendisse egestas tortor leo in lorem. Lobortis ridiculus nullam accumsan in massa. At felis integer mauris nullam nullam consectetur. Ullamcorper at integer rhoncus nulla risus."}
          linkedin={"https://www.linkedin.com/in/danielchungg/"}
          github={"https://github.com/danielchungdev"}
        />
        <Portraits
          image={"danielchung"}
          name={" Daniel Chung"}
          description={"Orci suspendisse egestas tortor leo in lorem. Lobortis ridiculus nullam accumsan in massa. At felis integer mauris nullam nullam consectetur. Ullamcorper at integer rhoncus nulla risus."}
          linkedin={"https://www.linkedin.com/in/danielchungg/"}
        />
        <Portraits
          image={"danielchung"}
          name={" Daniel Chung"}
          description={"Orci suspendisse egestas tortor leo in lorem. Lobortis ridiculus nullam accumsan in massa. At felis integer mauris nullam nullam consectetur. Ullamcorper at integer rhoncus nulla risus."}
          linkedin={"https://www.linkedin.com/in/danielchungg/"}
        />
        <Portraits
          image={"danielchung"}
          name={" Daniel Chung"}
          description={"Orci suspendisse egestas tortor leo in lorem. Lobortis ridiculus nullam accumsan in massa. At felis integer mauris nullam nullam consectetur. Ullamcorper at integer rhoncus nulla risus."}
          linkedin={"https://www.linkedin.com/in/danielchungg/"}
          github={"https://github.com/danielchungdev"}
        />
      </div>

      {/* This is used to determine the size breakpoints */}
      {/* <div className="
			2xl:bg-black
			xl:bg-green-600
			lg:bg-yellow-400
			 md:bg-red-500
			  sm:bg-slate-700 
				">
        <h1 className="text-blue-200">Current width</h1>
      </div> */}
      
      <div className="mt-32">
        <Footer />
      </div>

    </main>
  )
}
