export default function ScrollToTop({ color }) {
	return (
		<div className="scroll-to-top">
			<a href="#top" style={{ color: color }}>
				<i className="fa-solid fa-arrow-up"></i>
			</a>
		</div>
	)
}
