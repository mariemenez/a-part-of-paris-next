import Button from "./Button"
export default function ProductNav({ data }) {
	return (
		<div className="product-nav">
			<div>
				<a className="btn-product btn-product--outline" href="mailto:j.viltart@apartofparis.com">
					Book with us
				</a>
			</div>
			<div>
				<a className="btn-product btn-product--outline" target="_blank" href={data.airbnb}>
					Check availabilities on Airbnb
				</a>
			</div>
		</div>
	)
}
