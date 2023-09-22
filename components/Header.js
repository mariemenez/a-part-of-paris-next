import Link from "next/link"
export default function Header({ contact, about, color, img, position }) {
	return (
		<div className="header" id="top" style={{ position: position }}>
			<Link href={about}>
				<p style={{ color: color, cursor: "pointer" }}>ABOUT</p>
			</Link>
			<Link className="home-logo" style={{ color: color }} href={"/"}>
				<img style={{ cursor: "pointer" }} src={img} alt="logo" className="logo" />
			</Link>
			<Link href={contact}>
				<p style={{ color: color, cursor: "pointer" }}>CONTACT</p>
			</Link>
		</div>
	)
}
