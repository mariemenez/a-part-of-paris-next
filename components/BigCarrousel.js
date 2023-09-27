import { useState } from "react"
import Link from "next/link"

export default function BigCarrousel({ data, height, width, dispo, link }) {
	const [displayText, setDisplayText] = useState()

	return (
		<div className="big-carrousel">
			{data.map((item, index) => {
				const imageId1 = item.p1.slice(32, 65)
				const finalImage1 = `https://lh3.googleusercontent.com/d/${imageId1}`

				if (item.dispo === dispo) {
					return (
						<div
							className="big-carrousel-card"
							key={index}
							style={{ width: width, height: height }}
							onMouseOver={() => {
								setDisplayText(item)
							}}
						>
							<Link href={`/${link}?index=${index}`}>
								<div style={{ height: "100%", width: "100%" }}>
									<img src={finalImage1} alt="apt" />
									<div className={displayText === item ? "text-actif" : "text-inactif"}>
										<div className="block"></div>
										<div className="block-text">
											{item.ch && (
												<p>
													{item.ch} BR - {item.m2} m2
												</p>
											)}
											{item.prs ? <p>{item.prs} people maximum</p> : null}
											<p>{item.titre}</p>
											<p>
												{item.arr}
												{item.arr === 1 ? "st" : item.arr === 2 ? "nd" : item.arr === 3 ? "rd" : "th"} Arrondissement
											</p>
											{item.prs ? <p>From {item.prix}€/night</p> : <p>{item.prix}€/month cc</p>}
										</div>
									</div>
								</div>
							</Link>
							<div className="apt-infos-big-carousel">
								<p style={{ fontWeight: "bolder" }}>
									{item.titre}, {item.arr}e Arrd
								</p>
								{item.ch && (
									<p>
										{item.ch} br - {item.m2} m2
									</p>
								)}
								{item.prs ? <p>{item.prs} people maximum</p> : null}

								{item.prs ? <p>From {item.prix}€/night</p> : <p>{item.prix}€/month cc</p>}
							</div>
						</div>
					)
				} else return null
			})}
		</div>
	)
}
