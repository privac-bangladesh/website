import { ArrowUpOnSquareIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { FaTwitterSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa'

export const Footer = () => {
    return (
        <footer className="bg-rose-900 rounded-t-3xl 2xl:mx-60 xl:mx-36 lg:mx-16 md:mx-10 pt-5">
            <div className="w-10/12 mx-auto mt-16">
                <ArrowUpOnSquareIcon className="h-16 w-16 text-neutral-200" />
                <div className='mb-16 mt-8 md:flex md:gap-2'>
                    <h1 className='text-neutral-200 text-3xl font-bold md:w-1/3'>Participate in our User Research, Share Your Story and/or Thoughts!</h1>
                    <div className=' md:w-2/3'>
                        <h1 className='text-neutral-200 my-6 text-lg font-thin md:mb-6 md:mt-0'>Help us make the best version of PrivaC by participating in our research where you only have to take a short survey linked below. </h1>
                        <h1 className='text-neutral-200 font-thin md:w-10/12'>Reach out to us if you or your loved one has been a victim of cybercrime. We would like to take your input on building the best in-app experience for cybercrime victims to get connected to the help they need.</h1>
                        <p>&nbsp;</p>
                        <Link href={"https://forms.gle/A5vnAqjxczFGXARA8"}>
                            <h1 className="text-white text-2xl font-bold">Participate in Our User Study Here </h1>
                        </Link>
                        
                    </div>
                </div>
            </div>
            <div className="bg-rose-950 rounded-t-3xl px-5 pt-8 text-neutral-200 mt-2">
                <div className='w-10/12 mx-auto md:flex md:justify-between'>

                    <div className='flex flex-col gap-4 mb-6'>
                        
                            <h1>PrivaC has been featured on:</h1>
                        
                        <Link href={"https://www.thedailystar.net/bytes/tech-tips/news/dealing-ever-growing-cyber-harassment-against-women-2156276"}>
                            <h1>The Daily Star Bangladesh</h1>
                        </Link>
                        <Link href={"https://www.dhakatribune.com/opinion/op-ed/249339/op-ed-how-misogyny-thrives-on-social-media"}>
                            <h1>Dhaka Tribune</h1>
                        </Link>
                        <Link href={"https://yoursitehub.com/stories/the-story-of-privashe-and-one-young-womans-drive-to-conquer-cyber-crime-and-inspire-women-in-stem-in-her-corner-of-the-world/"}>
                            <h1>SiteHub US</h1>
                        </Link>
                    </div>

                    <div>
                        <h1 className='font-semibold mb-2'>Contact</h1>
                        <div className='flex flex-col gap-4'>
                            <h1>email: privactech@gmail.com</h1>
                        </div>
                    </div>

                    <div className='py-6'>
                        <Image
                            src="/svg/logo_white.svg"
                            height={500}
                            width={150}
                            alt="PrivaC logo"
                        />
                        <div className='flex my-4 w-1/3 md:w-full gap-4'>
                            <Link href={"https://www.linkedin.com/company/projectprivac"}><FaLinkedin className='w-7 h-7' /></Link>
                            <Link href={"https://www.facebook.com/projectprivac/"}><FaFacebookSquare className='w-7 h-7' /></Link>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}