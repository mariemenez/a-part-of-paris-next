export default function MiddleTitle({ title, color, borderBottom, marginRight, marginTop, paddingTop }) {
	return (
		<div
			className="middle-title"
			style={{ borderBottom: borderBottom, marginRight: marginRight, marginTop: marginTop, paddingTop: paddingTop }}
		>
			<h1 style={{ color: color }}>{title}</h1>
		</div>
	)
}
