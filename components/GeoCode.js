import axios from "axios"
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api"
import { useState, useEffect } from "react"

export default function GeoCode({ location }) {
	const [lat, setLat] = useState()
	const [lng, setLng] = useState()
	const [isLoading, setIsLoading] = useState(true)

	const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY })

	useEffect(() => {
		const getGeoCode = async () => {
			try {
				const response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
					params: {
						address: location,
						key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
					},
				})

				setLat(response.data.results[0].geometry.location.lat)
				setLng(response.data.results[0].geometry.location.lng)
				setIsLoading(false)
			} catch (error) {
				console.log(error.response)
			}
		}
		getGeoCode()
	}, [location])

	return isLoading || !isLoaded ? (
		<div className="map-indisponible">
			<i className="fa-solid fa-triangle-exclamation"></i>
			<p>
				Map unavailable at the moment. <br /> Please try again.
			</p>
		</div>
	) : (
		<div className="map-border">
			<GoogleMap zoom={15} center={{ lat: lat, lng: lng }} mapContainerClassName="map-container-product">
				<MarkerF position={{ lat: lat, lng: lng }} />
			</GoogleMap>
		</div>
	)
}
