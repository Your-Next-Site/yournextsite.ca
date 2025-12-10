import ContentContainerDark from '../containers/content-container-dark'
import ContentContainerLight from '../containers/content-container-light'

export default function ValuesSection() {
	return (
		<>
			<ContentContainerDark>
				<h2 className="mt-8 mb-4 font-bold text-3xl">Our Values</h2>
			</ContentContainerDark>

			<div className="flex flex-wrap justify-center gap-8">
				<ContentContainerLight>
					<div className="w-full p-4">
						<i className="fas fa-lightbulb fa-2x mb-4"></i>
						<h3 className="font-bold text-xl">Innovation</h3>
						<p className="text-gray-500 text-lg">
							We value innovation and creativity in our work.
						</p>
					</div>
				</ContentContainerLight>
				<ContentContainerLight>
					<div className="w-full p-4">
						<i className="fas fa-handshake fa-2x mb-4"></i>
						<h3 className="font-bold text-xl">
							Customer Satisfaction
						</h3>
						<p className="text-gray-500 text-lg">
							We prioritize customer satisfaction in all our
							projects.
						</p>
					</div>
				</ContentContainerLight>
			</div>
		</>
	)
}
