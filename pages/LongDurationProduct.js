import { useRouter } from "next/router"
import Loader from "../components/Loader"
import useFetch from "../hooks/useFetch"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TopTitle from "../components/TopTitle"
import ScrollToTop from "../components/ScrollToTop"
// import GeoCode from "../components/GeoCode"
import MiddleTitle from "../components/MiddleTitle"
// import ZoomPic from "../components/ZoomPic"
// import Details from "../components/Details"
import { useState } from "react"
const makeArray = require("./makeArray")
const Flickity = require("react-flickity-component")

export default function LongDurationProduct() {
	const router = useRouter()
	const { index } = router.query

	const [data, isLoading] = useFetch(`/longueDuration/${index}`)
	console.log(data)

	const [visible, setVisible] = useState(false)
	const [picture, setPicture] = useState()
	const finalImagesArray = makeArray(data)

	return isLoading ? (
		<Loader />
	) : (
		<div className="background-container">
			<Header
				contact={"/#contact"}
				about={"/#about"}
				color={"#304b74"}
				img={"https://res.cloudinary.com/dne4o9rdd/image/upload/v1683616452/Logo_Final_ok_-_Copie_e508o4.jpg"}
			/>
			<section className="general-container">
				<TopTitle title={data.titre} color={"#304b74"} />
				<div className="product-carrousel">
					<Flickity options={{ initialIndex: 1, wrapAround: true, pageDots: false, draggable: false }}>
						{finalImagesArray.map((item, index) => {
							return (
								<img
									loading="lazy"
									key={index}
									src={item}
									alt="apt"
									className="product-carrousel-img"
									onClick={() => {
										setVisible(!visible)
										setPicture(item)
									}}
								/>
							)
						})}
					</Flickity>
				</div>

				{/* <div className="product-infos">
					<div className="product-infos-left">
						<GeoCode location={data.adr} />
					</div>
					<div className="product-infos-right">
						<MiddleTitle title={"Details"} borderBottom={"	#FFFF 2px solid"} paddingTop={0} />
						<Details data={data} />
						<div className="product-infos-right-button">
							<a
								style={{ marginTop: "20px" }}
								className="btn-product btn-product--outline"
								href="mailto:j.viltart@apartofparis.com"
							>
								Je suis intéressé(e)
							</a>
						</div>
					</div>
				</div> */}
			</section>
			{visible && <ZoomPic setVisible={setVisible} picture={picture} finalImagesArray={finalImagesArray} />}
			<ScrollToTop color={"#304b74"} />
			<Footer />
		</div>
	)
}
