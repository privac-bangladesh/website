import { FC } from "react"
interface Stats {
    text: string,
    number: number,
    plus?: boolean
}

export const NumberStats: FC<Stats> = ({ text, number, plus }) => {
    return (
        <div className="w-2/3 mx-auto">

            <div className="text-center">
                <h1 className="text-rose-950 font-bold text-6xl mb-5">{number}{plus ? "+" : null}</h1>
                <h1 className="font-bold text-4xl">{text}</h1>
            </div>
        </div>
    )
}
