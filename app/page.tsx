import ContentContainerDark from '@/components/ui/containers/content-container-dark'
import HeroSection from '@/components/ui/hero/hero-section'
import HomePageContent1 from '@/components/ui/home/home-page-content-1'
import HomePageContent2 from '@/components/ui/home/home-page-content-2'
import LinkToContacts from '@/components/ui/link-to-contact'

export default function Home() {
	return (
		<>
			<HeroSection />

			<HomePageContent1 />

			<HomePageContent2 />

			<ContentContainerDark>
				<LinkToContacts />
			</ContentContainerDark>
		</>
	)
}
