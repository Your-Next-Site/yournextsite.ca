export default function ContentContainerDark({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="w-full max-w-4xl rounded-xl border border-slate-800 bg-slate-900 p-8 text-center shadow-xl">
			{children}
		</div>
	)
}
