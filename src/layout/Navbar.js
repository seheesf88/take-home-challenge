import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Navbar = ({ onSearch }) => {
	return (
		<div style={styles.container}>
			<div style={styles.left}>
				<Logo style={styles.logo} />
				<strong>ChatBot</strong>
			</div>
			<input
				type="text"
				placeholder="Search..."
				onChange={(e) => onSearch(e.target.value)}
				style={styles.input}
			/>
		</div>
	);
};

const styles = {
	container: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
	},
	left: {
		display: "flex",
		alignItems: "center",
		gap: 8,
	},
	logo: {
		width: 24,
		height: 24,
	},
	input: {
		padding: 5,
	},
};

export default Navbar;
