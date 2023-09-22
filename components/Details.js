export default function Details({ data }) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				justifyContent: "space-around",
			}}
		>
			<h3>{data.descr}</h3>
			<div className="product-infos-right-details">
				<p>{data.m2} m2</p>
				<p>-</p>
				<p>{data.ch} br</p>
				<p>-</p>
				<p>{data.sdb} bathroom</p>
				{data.prs && <p>-</p>}
				{data.prs && `${data.prs} persons`}
				<p>-</p>
				<p>{data.etg === 0 ? "ground floor" : `${data.etg} floor`}</p>
				{data.asc && <p>-</p>}
				<p>{data.asc ? (data.asc === "x" ? "ascenseur" : "pas d'ascenseur") : null}</p>
			</div>
		</div>
	)
}