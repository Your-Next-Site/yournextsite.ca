import ContentContainerLight from '../containers/content-container-light'

export default function ContactHeader() {
	return (
		<div
			className="flex h-96 w-full items-center justify-center bg-center bg-cover"
			style={{ backgroundImage: "url('/intuitiveness.jpg')" }}
		>
			<ContentContainerLight>
				<h1 className="font-bold text-5xl text-white drop-shadow-lg">
					Contact Us
				</h1>
			</ContentContainerLight>
		</div>
	)
}
