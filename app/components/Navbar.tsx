import Image from "next/image"

export const Navbar = () => {
	return (
		<div className="bg-rose-900 rounded-b-full 2xl:mx-60 xl:mx-36 lg:mx-16 md:mx-10">
			<Image
				className="lg:ml-24 md:ml-20 ml-10 py-3"
				src="/svg/logo_white.svg"
				alt="PrivaC logo"
				height={100}
				width={100}
			/>
		</div>
	)
}