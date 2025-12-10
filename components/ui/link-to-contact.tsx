import Link from 'next/link'
import { Button } from './button'

export default function LinkToContacts() {
	return (
		<Button
			asChild
			className="w-full bg-blue-600 font-bold text-lg text-white shadow-lg hover:bg-blue-700"
			size="lg"
		>
			<Link href="/pages/contact">Get in Touch</Link>
		</Button>
	)
}
