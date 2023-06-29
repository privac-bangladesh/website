import { FC } from "react"
import Image from "next/image"
import Link from "next/link"

interface PortraitsProps {
    image: string,
    name: string,
    description: string,
    linkedin: string,
    github?: string
}

export const Portraits: FC<PortraitsProps> = ({ image, name, description, linkedin, github }) => {
    return (
        <div className="w-11/12 sm:w-[500px] md:w-[600px] m-auto my-6">
            <div className="w-11/12 m-auto">
                <div className="flex gap-4">
                    <div className="w-5/12 m-auto">
                        <Image
                            className="rounded-full w-36 h-36 object-cover m-auto"
                            src={`/images/team/${image}.jpg`}
                            width={500}
                            height={500}
                            alt={`Picture of ${name}`}
                        />
                    </div>
                    <div className="w-7/12 sm:w-10/12">
                        <h1 className="font-bold text-2xl">{name}</h1>
                        <h1>{description}</h1>
                        <div className="text-rose-950 font-semibold flex gap-4">
                            <Link href={linkedin} target="_blank">Linkedin</Link>
                            {
                                github ? <Link href={github} target="_blank">Github</Link> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}