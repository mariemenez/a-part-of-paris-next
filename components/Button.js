import Link from "next/link"

export default function Button({ link, text, className, target }) {
	return (
		<Link href={link} target={target}>
			<span type="button" className={className}>
				{text}
			</span>
		</Link>
	)
}
