import Loader from "../components/Loader"
import useFetch from "../hooks/useFetch"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TopTitle from "../components/TopTitle"
import MiddleTitle from "../components/MiddleTitle"
import ScrollToTop from "../components/ScrollToTop"
import SmallCarrousel from "../components/SmallCarrousel"
import BigCarrousel from "../components/BigCarrousel"

export default function LongDuration() {
	const [data, isLoading] = useFetch("/longueDuration")

	return isLoading ? (
		<Loader />
	) : (
		<div className="background-container">
			<Header
				contact="/#contact"
				about={"/#about"}
				color={"#1d4b67"}
				img={"https://res.cloudinary.com/dne4o9rdd/image/upload/v1683616452/Logo_Final_ok_-_Copie_e508o4.jpg"}
			/>
			<section className="general-container">
				<TopTitle title={"LONG TERM RENTALS"} color={"#304b74"} />
				<MiddleTitle title={"Currently available"} color={"#304b74"} />
				<SmallCarrousel data={data} />
				<MiddleTitle title={"Too late...already rented"} color={"#304b74"} marginTop={"50px"} />
				<BigCarrousel data={data} height={"300px"} width={"300px"} dispo={"non"} link={"LongDurationProduct"} />
			</section>
			<ScrollToTop color={"#304b74"} />
			<Footer />
		</div>
	)
}
