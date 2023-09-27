const Flickity = require("react-flickity-component")

export default function ZoomPic({ setVisible, finalImagesArray, startIndex }) {
	return (
		<div className="modal-root">
			<div className="modal-boutton">
				<button
					onClick={() => {
						setVisible(false)
					}}
					className="boutton"
				>
					X
				</button>
			</div>
			<div className="modal">
				<Flickity options={{ initialIndex: startIndex, wrapAround: true, pageDots: false, draggable: true }}>
					{finalImagesArray.map((item, index) => {
						return (
							<div className="modal-carrousel" key={index}>
								<img src={item} alt="apt" className="modal-carrousel-img" />
							</div>
						)
					})}
				</Flickity>
			</div>
		</div>
	)
}
