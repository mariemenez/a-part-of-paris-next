import { useRouter } from "next/router"
import Loader from "../components/Loader"
import useFetch from "../hooks/useFetch"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TopTitle from "../components/TopTitle"
import ScrollToTop from "../components/ScrollToTop"
import GeoCode from "../components/GeoCode"
import MiddleTitle from "../components/MiddleTitle"
import { useState } from "react"
import ZoomPic from "../components/ZoomPic"
import Details from "../components/Details"
import Equipement from "../components/Equipement"
import ProductNav from "../components/ProductNav"
const Flickity = require("react-flickity-component")
const makeArray = require("./makeArray")

export default function ShortDurationProduct() {
	const router = useRouter()
	const { index } = router.query
	const [data, isLoading] = useFetch(`/shortDuration/${index}`)
	const [visible, setVisible] = useState(false)
	const [startIndex, setStartIndex] = useState(0)
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
				<TopTitle title={data.titre} color={"#304b74"} margin={"120px"} />
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
										setStartIndex(finalImagesArray.indexOf(item))
									}}
								/>
							)
						})}
					</Flickity>
				</div>
				<div className="product-infos">
					<div className="product-infos-left">
						<GeoCode location={data.adr} />
						<ProductNav data={data} />
					</div>
					<div className="product-infos-right">
						<MiddleTitle title={"Details"} borderBottom={"#FFFF 2px solid"} paddingTop={0} />
						<Details data={data} />
						<Equipement data={data} />
					</div>
				</div>
			</section>
			{visible && <ZoomPic setVisible={setVisible} finalImagesArray={finalImagesArray} startIndex={startIndex} />}
			<ScrollToTop color={"#304b74"} />
			<Footer />
		</div>
	)
}
