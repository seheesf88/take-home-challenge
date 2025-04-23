import React from "react";

const generateLorem = (count, filter) => {
	const base = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
	return Array(count)
		.fill(base)
		.filter((p) => p.toLowerCase().includes(filter.toLowerCase()));
};

const highlightText = (text, highlight) => {
	if (!highlight) return text;
	const regex = new RegExp(`(${highlight})`, "gi");
	return text
		.split(regex)
		.map((part, i) => (regex.test(part) ? <mark key={i}>{part}</mark> : part));
};

const ContentArea = ({ currentPage, searchQuery }) => {
	const paragraphs = generateLorem(20, searchQuery);

	return (
		<div style={{ padding: 20, overflowY: "auto", height: "calc(100vh - 60px)" }}>
			<h2>{currentPage} Page</h2>
			{paragraphs.map((p, i) => (
				<p key={i}>{highlightText(p, searchQuery)}</p>
			))}
		</div>
	);
};

export default ContentArea;
