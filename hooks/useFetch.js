import { useState, useEffect } from "react"
import axios from "axios"

export default function useFetch(baseUrl) {
	const [data, setData] = useState()
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`https://site--a-part-of-paris-backend--6gc2xpkgkrgz.code.run${baseUrl}`)

				setData(response.data)
				setIsLoading(false)
			} catch (error) {
				console.log(error.response)
			}
		}
		fetchData()
	}, [baseUrl])

	return [data, isLoading]
}
