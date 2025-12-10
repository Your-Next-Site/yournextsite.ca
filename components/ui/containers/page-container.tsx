export default function PageContainer({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex flex-col items-center gap-4 p-4 pb-8 md:gap-8">
			{children}
		</div>
	)
}
