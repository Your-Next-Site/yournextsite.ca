'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PagesInfo } from '../../types/pages'

export default function NavBar() {
	const pathname = usePathname()

	const [previousPage, setPreviousPage] = useState<string | null>(null)

	useEffect(() => {
		const storedPath = sessionStorage.getItem('previousPage')
		if (storedPath) setPreviousPage(storedPath)

		sessionStorage.setItem('previousPage', pathname)
	}, [pathname])

	return (
		<div className="flex flex-row justify-evenly bg-slate-900 font-bold text-gray-100 border-b border-slate-800">
			<div className="grow"></div>
			{PagesInfo.map((page) => (
				<Link
					className={`hover:bg-slate-800 ${
						page.url === pathname
							? 'fade-border-in bg-slate-800'
							: ''
					}
            
            ${page.url === previousPage && page.url !== pathname ? 'fade-border-out' : ''}grow min-w-[120px] select-none border-b-[var(--secondary)] px-4 py-2 text-center hover:cursor-pointer transition-colors`}
					href={page.url}
					key={page.order}
				>
					{page.name}
				</Link>
			))}
			<div className="grow"></div>
		</div>
	)
}
