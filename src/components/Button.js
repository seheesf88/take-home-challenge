import React, { useMemo } from "react";

const Button = ({ children, onClick, mode = "contained", style = {} }) => {
	const isOutline = mode === "outline";

	const baseStyle = useMemo(
		() => ({
			padding: "6px 12px",
			borderRadius: 6,
			border: "1px solid #007bff",
			cursor: "pointer",
			fontSize: 14,
			fontWeight: 500,
			backgroundColor: isOutline ? "white" : "#007bff",
			color: isOutline ? "#007bff" : "white",
			...style,
		}),
		[isOutline, style]
	);

	return (
		<button onClick={onClick} style={baseStyle}>
			{children}
		</button>
	);
};

export default Button;
