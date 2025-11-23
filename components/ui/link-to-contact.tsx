import Link from 'next/link'

export default function LinkToContacts() {
	return (
		<Link
			className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			href="/pages/contact"
		>
			Get in Touch
		</Link>
	)
}
