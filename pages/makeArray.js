const makeArray = (data) => {
	let arrayImages = []

	if (data) {
		for (let i = 1; i <= 20; i++) {
			const propertyName = "p" + i
			if (data[propertyName]) {
				const imageId = data[propertyName].slice(32, 65)
				const finalImage = `https://lh3.googleusercontent.com/d/${imageId}`
				arrayImages.push(finalImage)
			}
		}
	}

	return arrayImages
}

module.exports = makeArray
