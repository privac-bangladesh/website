 import { FC } from "react"

 interface QuotesProps{
    text: string,
    author: string,
 }

 export const Quotes:FC<QuotesProps> = ({text, author}) => {
    return(
        <div className="w-10/12 m-auto md:w-7/12 lg:w-5/12 xl:w-3/8 py-6">
            <h1 className="text-2xl font-semibold">{text}</h1>
            <div className="flex justify-end">
                <h1 className="text-lg text-rose-950 font-semibold">- {author}</h1>
            </div>
        </div>
    )
 }