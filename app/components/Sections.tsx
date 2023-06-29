 import { FC } from "react"

interface SectionsProps{
    title: string, 
    boldText: string,
    regularText: string,
}

 export const Sections:FC<SectionsProps> = ({title, boldText, regularText}) => {
    return(
        <div className="w-10/12 m-auto my-12 lg:w-8/12">
            <h1 className="font-semibold text-rose-950 text-lg mb-4">{title}</h1>
            <div className="md:flex">
                <div className="font-bold text-2xl mb-4 md:w-1/2">{boldText}</div>
                <div className="md:w-1/2">{regularText}</div>
            </div>
        </div>
    )
 }