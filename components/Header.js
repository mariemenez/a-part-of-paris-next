import Link from "next/link"
export default function Header({ contact, about, color, img, position }) {
	return (
		<div className="header" id="top" style={{ position: position }}>
			<Link style={{ color: color }} href={about}>
				ABOUT
			</Link>
			<Link className="home-logo" style={{ color: color }} href={"/"}>
				<img src={img} alt="logo" className="logo" />
			</Link>
			<Link style={{ color: color }} href={contact}>
				CONTACT
			</Link>
		</div>
	)
}
