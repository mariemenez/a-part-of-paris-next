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
				<p>{!data.prs && `${data.prix}€/month -`}</p>
				<p>{data.m2} m2</p>
				<p>-</p>
				<p>{data.sqft} sqft</p>
				<p>-</p>
				<p>{data.ch} BR</p>
				<p>-</p>
				<p>{data.sdb} bathroom</p>
				{data.prs && <p>-</p>}
				{data.prs && `${data.prs} people`}
				<p>-</p>
				<p>
					{data.etg}
					{data.etg === 0
						? "ground floor"
						: data.etg === 1
						? "st"
						: data.etg === 2
						? "nd"
						: data.etg === 3
						? "rd"
						: "th"}
				</p>{" "}
				floor
				{data.asc && <p>-</p>}
				<p>{data.asc ? (data.asc === "x" ? "elevator" : "no elevator") : null}</p>
			</div>
		</div>
	)
}
