import Image from 'next/image'
import NavBar from './navbar'
import Title from './title'

export default function Top() {
	return (
		<header className="flex w-full flex-col pr-[var(--scrollbar-width)]">
			<div className="flex w-full flex-row items-center">
				<div>
					<Image
						alt="logo"
						height={250}
						src="/logo5.png"
						width={250}
					/>
				</div>
				<Title />
			</div>
			<NavBar />
		</header>
	)
}
