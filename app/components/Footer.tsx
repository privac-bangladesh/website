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
                    <h1 className='text-neutral-200 text-3xl font-bold md:w-1/3'>Share your story</h1>
                    <div className=' md:w-2/3'>
                        <h1 className='text-neutral-200 my-6 text-lg font-semibold md:mb-6 md:mt-0'>Know someone affected by cybercrime? We are here to help</h1>
                        <h1 className='text-neutral-200 md:w-10/12'>Reach out to us if you or your loved one has been a victim of cybercrime. We’ll connect you to the legal and psychological support that you may need.</h1>
                    </div>
                </div>
            </div>
            <div className="bg-rose-950 rounded-t-3xl px-5 pt-8 text-neutral-200 mt-2">
                <div className='w-10/12 mx-auto md:flex md:justify-between'>

                    <div className='flex flex-col gap-4 mb-6'>
                        <Link href={"#"}>
                            <h1>The Problem</h1>
                        </Link>
                        <Link href={"#"}>
                            <h1>Our solution</h1>
                        </Link>
                        <Link href={"#"}>
                            <h1>Become a Responder</h1>
                        </Link>
                        <Link href={"#"}>
                            <h1>Meet the Team</h1>
                        </Link>
                    </div>

                    <div>
                        <h1 className='font-semibold mb-2'>Contact</h1>
                        <div className='flex flex-col gap-4'>
                            <h1>email: PrivaC@gmail.com</h1>
                            <h1>phone: +1 585-555-8888</h1>
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
                            <FaTwitterSquare className='w-7 h-7' />
                            <FaLinkedin className='w-7 h-7' />
                            <FaFacebookSquare className='w-7 h-7' />
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}