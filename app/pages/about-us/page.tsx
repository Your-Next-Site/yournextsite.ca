import AboutHeader from '@/components/ui/about/about-header'
import ContentContainerDark from '@/components/ui/containers/content-container-dark'
import LinkToContacts from '@/components/ui/link-to-contact'
import MissionSection from '@/components/ui/mission/mission-section'
import TeamSection from '@/components/ui/team/team-section'
import ValuesSection from '@/components/ui/values/values-section'

export default function AboutUs() {
	return (
		<>
			<AboutHeader />
			<TeamSection />
			<MissionSection />
			<ValuesSection />

			<ContentContainerDark>
				<LinkToContacts />
			</ContentContainerDark>
		</>
	)
}
