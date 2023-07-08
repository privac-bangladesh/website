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
    <main className="bg-neutral-950">

      <Navbar />

      {/* Screen one */}
      <div className="flex w-full flex-col md:flex-row lg:w-10/12 xl:w-8/12 justify-evenly m-auto my-24 gap-4 sm:gap-0">

        <div className="grid place-content-center">
          <Image
            src="/images/headbg.svg"
            alt="Picture of the application"
            width={1000}
            height={1000}
          />
        </div>

        <div className="grid place-content-center">
          <Image
            src="/svg/logo_white.svg"
            alt="PrivaC logo"
            width={190}
            height={190}
          />
          <h1 className="text-5xl font-bold text-neutral-200">fights</h1>
          <h1 className="text-5xl font-bold text-neutral-200">cybercrimes.</h1>
        </div>

      </div>

      <div className="bg-rose-800 rounded-3xl lg:w-10/12 xl:w-8/12 m-auto">
        <div className="bg-white rounded-3xl p-5 py-40 overflow-hidden md:grid">
          <div className="flex w-10/12 m-auto flex-col md:flex-row">
            <div className="text-black-20 md:w-1/2">
              <div className="">
                <h1 className="text-3xl font-bold">In Bangladesh,</h1>
                <h1 className="text-1xl">it is estimated that</h1>
                <h1 className="text-7xl font-bold">only 19%</h1>
                <h1 className="text-3xl font-bold">of cybercrime victims <br></br>seek legal help.</h1>
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
              <h1 className="text-2xl font-bold text-neutral-200">and only</h1>
              <h1 className="text-8xl font-bold text-neutral-200">7% </h1>
              <h1 className="text-2xl font-bold text-neutral-200">of these cybercrime victims</h1>
              <h1 className="text-2xl font-bold text-neutral-200">receive their desired help.</h1>
            </div>

          </div>
        </div>
      </div>

      <div className="my-24 flex flex-col gap-4 md:flex-row md:gap-3 lg:w-1/2 md:w-10/12 md:mx-auto md:justify-center">
        <Image
          className="m-auto md:m-0"
          src="/svg/logo_white.svg"
          alt="PrivaC logo"
          width={200}
          height={200}
        />
        <h1 className="text-3xl text-rose-900 font-semibold m-auto md:mx-0 w-10/12 md:w-8/12 lg:w-5/12">We are here to change that.</h1>
      </div>


      <div className="text-neutral-900 bg-white">
        <h1>&nbsp;</h1>
        <Sections
          title="About us"
          boldText="Bangladesh's 1st cybercrime countermeasure services organization"
          regularText="At PrivaC, we are committed to helping you find the necessary legal and psychological support that you deserve. You’re not alone, we’ll be with you at every step of the way."
        />
        <Sections
          title="Our mission"
          boldText="Creating a safe cyber-space for all"
          regularText="PrivaC was created with one goal in mind: to help people overcome the challenges of the digital world by making professional resources accessible to all."
        />
        <h1>&nbsp;</h1>
      </div>

      <div className="flex text-neutral-200 flex-col gap-14 md:flex-row lg:w-10/12 lg:m-auto xl:w-8/12 py-16">
        <NumberStats text="Successful cases" number={300} plus={true} />
        <NumberStats text="Trained responders" number={10} plus={false} />
        <NumberStats text="Partnering organizations" number={20} plus={true} />
      </div>
      {/*
      <div className=" text-neutral-200 w-10/12 m-auto xl:w-8/12 my-32">
        <h1>Chart goes here</h1>
      </div>*/ }


      <div className="my-16 text-rose-500 ">
        <div className="flex text-neutral-200 font-bold text-3xl flex-col gap-14 md:flex-row lg:w-10/12 lg:m-auto xl:w-8/12">
          <h1>Testimonials</h1>
        </div>
        <Quotes
          text="
          ' The explicit photos and video that [my abuser took] without my consent 
            were uploaded to multiple adult content websites as revenge. 
            My friends avoided me. Strangers blackmailed me...
            I survived with the trauma, alone and helpless for 1.5 years...
            Later, I shared my problem with PrivaC, who helped me to overcome my fear and insecurities to take legal action. 
            Sakib [a trained PrivaC responder] even accompanied me to meet the cyber crime support unit and collect necessary evidence.
            The abuser has been imprisoned since November 2019...PrivaC has been an immense help through everything. I'm really thankful to the Almighty Allah for getting justice. '
          "
          author="Saika R."
        />
      </div>

      <div className="w-10/12 m-auto xl:w-8/12 text-neutral-200">
        <h1 className="text-5xl font-bold my-6">Be a hero with PrivaC</h1>
        <Image
          src="/images/law.png"
          width={1500}
          height={500}
          alt="Be a hero with PrivaC"
        />
        <div className="mt-6 md:flex xl:w-10/12 xl:mx-auto mb-24">
          <h1 className="text-2xl text-rose-800 font-semibold md:w-1/2 xl:text-4xl">Join our growing network of psychologists and lawyers</h1>
          <div className="my-4 md:w-1/2 md:my-0">
            <h1>
              At PrivaC, we are building a community of compassionate and skilled professionals
              who understand the challenges faced by cybercrime victims. By joining our network,
              you will have the opportunity to provide crucial support, guidance, and expertise to those in need.
            </h1>
            <Link href={"#"}>
              <h1 className="text-rose-800 text-2xl font-bold">Learn more</h1>
            </Link>
          </div>
        </div>
      </div>


      <div className="w-10/12 m-auto xl:w-8/12 my-32">
        <h1 className="font-semibold text-rose-800 text-lg mb-4">Featured On:</h1>
        <Image
          src="/images/featured.png"
          width={2000}
          height={500}
          alt="Places featured."
        />
      </div>
      <div className="w-10/12 m-auto my-12 lg:w-8/12">
        <h1 className="font-semibold text-rose-800 text-lg mb-4 w-10/12  ">Meet the Team</h1>
      </div>
      <div className="md:flex xl:w-12/12 2xl:w-10/12 xl:m-auto flex-wrap text-neutral-100">
        <Portraits
          image={"nuzhatminhaz"}
          name={"Nuzhat Minhaz"}
          description={"Co-Founder / CEO"}
          linkedin={"https://www.linkedin.com/in/danielchungg/"}
          github={"https://github.com/danielchungdev"}
        />
        <Portraits
          image={"danielchung"}
          name={"Shayaan Husain"}
          description={"Co-Founder / Business Strategy Development"}
          linkedin={"https://www.linkedin.com/in/danielchungg/"}
        />
        <Portraits
          image={"justinzach"}
          name={"Justin Costa"}
          description={"Project Lead"}
          linkedin={"https://www.linkedin.com/in/danielchungg/"}
        />
        <Portraits
          image={"danielchung"}
          name={" Daniel Chung"}
          description={"Full Stack Developer"}
          linkedin={"https://www.linkedin.com/in/danielchungg/"}
          github={"https://github.com/danielchungdev"}
        />
        <Portraits
          image={"justinzach"}
          name={"Karthik Leiju"}
          description={"Full Stack Developer"}
          linkedin={"https://www.linkedin.com/in/danielchungg/"}
        />
        <Portraits
          image={"danielchung"}
          name={"Daechan Kim"}
          description={"UIUX Designer"}
          linkedin={"https://www.linkedin.com/in/danielchungg/"}
          github={"https://github.com/danielchungdev"}
        />
        <Portraits
          image={"justinzach"}
          name={"Afia Joarder"}
          description={"Response Team Coordinator"}
          linkedin={"https://www.linkedin.com/in/danielchungg/"}
        />
        <Portraits
          image={"danielchung"}
          name={"Mashiyat Nayeem"}
          description={"Content Creator / Technical Writer"}
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
