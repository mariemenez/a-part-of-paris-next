import Link from "next/link"
export default function SmallCarrousel({ data }) {
	const Flickity = require("react-flickity-component")

	return (
		<div className="small-carrousel">
			<Flickity options={{ prevNextButtons: true, pageDots: false, cellAlign: "left", draggable: false }}>
				{data.map((item, index) => {
					const imageId1 = item.p1.slice(32, 65)
					const finalImage1 = `https://lh3.googleusercontent.com/d/${imageId1}`

					if (item.dispo === "oui") {
						return (
							<div className="small-carrousel-card" key={index}>
								<Link href={`/LongDurationProduct?index=${index}`}>
									<div className="small-carrousel-card-img-container">
										<img src={finalImage1} alt="apt" />
									</div>
								</Link>
								<div className="small-carrousel-card-apt-infos">
									<p>
										{item.ch} br - {item.m2} m2
									</p>
									<p>{item.titre}</p>
									<p>{item.arr}e Arrondissement</p>
									<p>{item.prix}€/month cc</p>
								</div>
							</div>
						)
					} else return null
				})}
			</Flickity>
		</div>
	)
}
