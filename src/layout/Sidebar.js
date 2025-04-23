import React from "react";
import { ReactComponent as AppsIcon } from "../assets/apps.svg";
import { ReactComponent as DocumentsIcon } from "../assets/document.svg";

const Sidebar = ({ currentPage, setCurrentPage }) => {
	const menu = [
		{
			title: "Apps",
			icon: (selected) => (
				<AppsIcon style={{ ...styles.icon, fill: selected ? "white" : "black" }} />
			),
		},
		{
			title: "Documents",
			icon: (selected) => (
				<DocumentsIcon style={{ ...styles.icon, stroke: selected ? "white" : "black" }} />
			),
		},
	];

	return (
		<div style={styles.sidebar}>
			{menu.map((item) => {
				const selected = currentPage === item.title;
				return (
					<div
						key={item.title}
						onClick={() => setCurrentPage(item.title)}
						style={{
							...styles.menuItem,
							backgroundColor: selected ? "blue" : "transparent",
						}}
					>
						{item.icon(selected)}
						<span style={{ color: selected ? "white" : "black" }}>{item.title}</span>
					</div>
				);
			})}
		</div>
	);
};

const styles = {
	sidebar: {
		width: 200,
		padding: 10,
		borderRight: "1px solid #ccc",
	},
	menuItem: {
		display: "flex",
		alignItems: "center",
		gap: 10,
		padding: 10,
		cursor: "pointer",
		borderRadius: 6,
	},
	icon: {
		width: 18,
		height: 18,
	},
};

export default Sidebar;
