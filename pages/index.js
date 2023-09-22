import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"
import Button from "../components/Button"
import TopTitle from "../components/TopTitle"
// import { useLocation } from "react-router-dom"
import Link from "next/link"
import { useEffect } from "react"
export default function Home() {
	const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY })

	// // const location = useLocation()

	// useEffect(() => {
	// 	if (location.hash) {
	// 		const targetElement = document.querySelector(location.hash)
	// 		if (targetElement) {
	// 			targetElement.scrollIntoView({
	// 				behavior: "smooth",
	// 				block: "start",
	// 				inline: "nearest",
	// 			})
	// 		}
	// 	}
	// }, [location])

	return (
		<div>
			<section className="home">
				<Header
					position={"absolute"}
					contact={"#contact"}
					about={"#about"}
					color={"#FFFFFF"}
					img={"https://res.cloudinary.com/dne4o9rdd/image/upload/v1683616465/logo2_sfqc3s.png"}
				/>
				<div className="home-title">
					<p>
						A small corner of paradise, <br></br>your apartment.
					</p>
				</div>

				<div className="buttons-container">
					<Button link={"/LongDuration"} text={"LONG TERM RENTALS"} className={"btn btn--outline"} />
					<Button link={"/ShortDuration"} text={"SHORT TERM RENTALS"} className={"btn btn--outline"} />
				</div>

				<div className="slider-container slider-1">
					<div className="slider">
						<div>
							<img
								src="https://res.cloudinary.com/dne4o9rdd/image/upload/v1692463483/imagecompressor/Diapositive9-min_h53pii.png"
								alt="paris 9"
							/>
						</div>
						<div>
							<img
								src="https://res.cloudinary.com/dne4o9rdd/image/upload/v1692463481/imagecompressor/Diapositive1-min_xabjjk.png"
								alt="paris 1"
							/>
						</div>
						<div>
							<img
								src="https://res.cloudinary.com/dne4o9rdd/image/upload/v1692463470/imagecompressor/Diapositive2-min_he8ff2.png"
								alt="paris 2"
							/>
						</div>
						<div>
							<img
								src="https://res.cloudinary.com/dne4o9rdd/image/upload/v1692463470/imagecompressor/Diapositive3-min_t8e2t4.png"
								alt="paris 3"
							/>
						</div>
						<div>
							<img
								src="https://res.cloudinary.com/dne4o9rdd/image/upload/v1692463477/imagecompressor/Diapositive4-min_qddsdd.png"
								alt="paris 4"
							/>
						</div>
						<div>
							<img
								src="https://res.cloudinary.com/dne4o9rdd/image/upload/v1692463483/imagecompressor/Diapositive5-min_xn221w.png"
								alt="paris 5"
							/>
						</div>
						<div>
							<img
								src="https://res.cloudinary.com/dne4o9rdd/image/upload/v1692463476/imagecompressor/Diapositive6-min_zrxkkz.png"
								alt="paris 6"
							/>
						</div>
						<div>
							<img
								src="https://res.cloudinary.com/dne4o9rdd/image/upload/v1692463482/imagecompressor/Diapositive7-min_bqnmmo.png"
								alt="paris 7"
							/>
						</div>
						<div>
							<img
								src="https://res.cloudinary.com/dne4o9rdd/image/upload/v1692463476/imagecompressor/Diapositive8-min_hgknbx.png"
								alt="paris 8"
							/>
						</div>

						<div>
							<img
								src="https://res.cloudinary.com/dne4o9rdd/image/upload/v1692463480/imagecompressor/Diapositive10-min_nej2rf.png"
								alt="paris 10"
							/>
						</div>
						<div>
							<img
								src="https://res.cloudinary.com/dne4o9rdd/image/upload/v1692463481/imagecompressor/Diapositive1-min_xabjjk.png"
								alt="paris 1"
							/>
						</div>
					</div>
				</div>
			</section>
			<section id="about" className="about">
				<div className="general-container">
					<TopTitle title={"ABOUT US"} color={"#304b74"} />
					<div className="about-text">
						<p>
							Located in the Le Marais for 20 years, we specialise in the real estate market in central Paris. <br />
							<br /> We assist our clients with any kind of real estate transactions and more particularily furnished
							long and short term rentals. <br /> Our small, friendly and dynamic team delivers efficient, quality
							service. Our clientèle is French and international and we work with property owners from all over the
							world. We speak French, English and Swedish. <br /> <br /> Don’t hesitate to contact us – we would be
							happy to work with you in the future.
						</p>
					</div>
				</div>
				<ScrollToTop color={"#304b74"} />
			</section>

			<section id="contact" className="contact">
				<div className="general-container">
					<TopTitle title={"CONTACT US"} color={"#FFFF"} />
					<div className="contact-text">
						{!isLoaded ? (
							<div>loading...</div>
						) : (
							<div className="contact-gauche">
								<div className="map-bloc">
									<GoogleMap
										zoom={15}
										center={{ lat: 48.8636803, lng: 2.3526205 }}
										mapContainerClassName="map-container"
									>
										<MarkerF position={{ lat: 48.8636803, lng: 2.3526205 }} />
									</GoogleMap>
								</div>
							</div>
						)}
						<div className="contact-droite">
							<div className="horaires">
								<h3>A part of Paris</h3>
								<p>
									203bis rue Saint Martin <br /> 75003 Paris
								</p>
								<p>+33 1 42 72 21 40</p>
								<a href="mailto:j.viltart@apartofparis.com">
									<p>Contact us</p>
								</a>
							</div>
							<div className="horaires">
								<h3>Opening hours :</h3>
								<p>Monday – Friday</p>
								<p>9.30 – 18.30</p>
								<p>Saturday</p>
								<p>10.00 – 17.00</p>
							</div>
						</div>
					</div>
				</div>
				<ScrollToTop color={"#dbdad6"} />
				<Footer />
			</section>
		</div>
	)
}
