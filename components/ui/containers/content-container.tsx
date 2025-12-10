export default function ContentContainer({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="w-full rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-lg md:w-4/6">
			{children}
		</div>
	)
}
