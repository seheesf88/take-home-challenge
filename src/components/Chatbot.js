import React, { useState, useEffect } from "react";

const Chatbot = () => {
	const [open, setOpen] = useState(false);
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState("");
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		let timer;
		if (open) {
			timer = setInterval(() => setSeconds((s) => s + 1), 1000);
		}
		return () => clearInterval(timer);
	}, [open]);

	const handleSend = () => {
		if (!input.trim()) return;
		setMessages((prev) => [
			...prev,
			{ from: "user", text: input },
			{ from: "bot", text: "This is a placeholder response." },
		]);
		setInput("");
	};

	const handleReset = () => {
		setMessages([]);
		setSeconds(0);
	};

	if (!open) {
		return (
			<button
				style={styles.fab}
				onClick={() => {
					setOpen(true);
					setSeconds(0);
				}}
			>
				💬
			</button>
		);
	}

	const isMobile = window.innerWidth < 600;

	return (
		<div
			style={{
				...styles.chatWindow,
				width: isMobile ? "100%" : 400,
				height: isMobile ? "100%" : 600,
			}}
		>
			<div style={styles.chatHeader}>
				<div>Elapsed: {seconds}s</div>
				<div>
					<button onClick={handleReset}>Reset</button>
					<button onClick={() => setOpen(false)}>Close</button>
				</div>
			</div>

			<div style={styles.chatBody}>
				{messages.map((msg, i) => (
					<div
						key={i}
						style={{
							...styles.message,
							textAlign: msg.from === "user" ? "right" : "left",
						}}
					>
						<span style={styles.messageBubble}>{msg.text}</span>
					</div>
				))}
			</div>

			<div style={styles.chatInput}>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleSend()}
					style={styles.inputField}
				/>
				<button onClick={handleSend}>Send</button>
			</div>
		</div>
	);
};

const styles = {
	fab: {
		position: "fixed",
		bottom: 20,
		right: 20,
		borderRadius: "50%",
		padding: 20,
		background: "#333",
		color: "#fff",
	},
	chatWindow: {
		position: "fixed",
		bottom: 20,
		right: 20,
		background: "#fff",
		border: "1px solid #ccc",
		display: "flex",
		flexDirection: "column",
		zIndex: 999,
	},
	chatHeader: {
		padding: 10,
		borderBottom: "1px solid #ccc",
		display: "flex",
		justifyContent: "space-between",
	},
	chatBody: {
		flex: 1,
		overflowY: "auto",
		padding: 10,
	},
	message: {
		marginBottom: 8,
	},
	messageBubble: {
		background: "#eee",
		padding: 6,
		borderRadius: 6,
		display: "inline-block",
		maxWidth: "70%",
	},
	chatInput: {
		padding: 10,
		borderTop: "1px solid #ccc",
		display: "flex",
	},
	inputField: {
		flex: 1,
		marginRight: 10,
	},
};

export default Chatbot;
