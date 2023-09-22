import Loader from "../components/Loader"
import useFetch from "../hooks/useFetch"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TopTitle from "../components/TopTitle"
import ScrollToTop from "../components/ScrollToTop"
import BigCarrousel from "../components/BigCarrousel"

export default function ShortDuration() {
	const [data, isLoading] = useFetch("/shortDuration")

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
				<TopTitle title={"SHORT TERM RENTALS"} color={"#304b74"} />
				<BigCarrousel data={data} height={"400px"} width={"400px"} dispo={"oui"} link={"ShortDurationProduct"} />
			</section>
			<ScrollToTop color={"#304b74"} />
			<Footer />
		</div>
	)
}
