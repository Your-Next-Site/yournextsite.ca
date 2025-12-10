export default function ContentContainerLight({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-lg">
			{children}
		</div>
	)
}
