export default function TopTitle({ title, color, margin, marginTop }) {
	return (
		<div className="top-title" style={{ marginTop: marginTop }}>
			<h1 style={{ color: color }}>{title}</h1>
		</div>
	)
}
