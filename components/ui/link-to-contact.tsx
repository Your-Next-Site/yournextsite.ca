import Link from 'next/link'
import { Button } from './button'

export default function LinkToContacts() {
	return (
		<Button
			asChild
			className="w-full text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
			size="lg"
		>
			<Link href="/pages/contact">Get in Touch</Link>
		</Button>
	)
}
