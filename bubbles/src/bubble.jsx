import { useState } from "react";

export default function Bubble({ text }) {
	const [showMore, setShowMore] = useState(false);
	const isLongText = text.length >= 100;
	const textContent =
		!isLongText || showMore ? text : text.slice(0, 100) + "...";
	const buttonText = showMore ? "Read Less" : "Read More";

	function toggleShowMore() {
		setShowMore(!showMore);
	}

	return (
		<div className={"text-bubble"}>
			<p>
				{textContent}{" "}
				{isLongText && (
					<span
						onClick={toggleShowMore}
						className="showMoreButton">
						{buttonText}
					</span>
				)}
			</p>
		</div>
	);
}
