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
		<div className="flex flex-row justify-evenly bg-primary font-bold text-[var(--surface)]">
			<div className="grow"></div>
			{PagesInfo.map((page) => (
				<Link
					className={`hover:bg-[var(--primary-selected)] ${
						page.url === pathname
							? 'fade-border-in bg-[var(--primary-selected)]'
							: ''
					}
            
            ${page.url === previousPage && page.url !== pathname ? 'fade-border-out' : ''}grow min-w-[120px] select-none border-b-[var(--primary)] px-4 py-2 text-center hover:cursor-pointer`}
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
