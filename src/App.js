import React, { useState } from "react";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import ContentArea from "./components/ContentArea";
import Chatbot from "./components/Chatbot";

function App() {
	const [currentPage, setCurrentPage] = useState("Apps");
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<div>
			<Navbar onSearch={setSearchQuery} />
			<div style={{ display: "flex" }}>
				<Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
				<ContentArea currentPage={currentPage} searchQuery={searchQuery} />
			</div>
			<Chatbot />
		</div>
	);
}

export default App;
