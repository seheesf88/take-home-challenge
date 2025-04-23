# 🧠 Chatbot Interface – React.js Project

This project is a simple, responsive website built with **React.js** that features:

- A clean top **Navbar** with logo and search bar
- A **Sidebar** to toggle between "Apps" and "Documents"
- A dynamic content area with search highlight
- A floating **Chatbot** window with messaging capabilities, reset, and timer

This project was created as part of a frontend development challenge.

---

## 🚀 Tech Stack

- **React.js** (Functional Components + Hooks)
- **CSS (inline styles)** for simplicity
- No backend – uses local state only

---

## 🛠️ How to Install

1. Clone this repo:

```bash
git clone https://github.com/your-username/chatbot-ui.git
cd chatbot-challenge
npm install
npm start
```

## ✅ Things to Improve More

This project works well as a basic prototype, but here are several ways it can be improved further:

### 🎨 Styles

- Add a `theme.js` file to manage shared design tokens such as:
  - Primary/secondary colors
  - Font sizes
  - Border radii
  - Shadow definitions
- Use CSS Modules, styled-components, or TailwindCSS for more scalable styling.
- Add dark/light mode toggle for better UX.

### 🧩 Functionality

- Create a reusable `<BaseInput />` component (like the existing `<Button />`) to unify input field styles.
- Add typing indicator (e.g., “Bot is typing...” with timeout).
- Automatically scroll to the latest message in the chat.
- Add timestamps to messages.

### 📱 Responsiveness

- Improve mobile handling with a custom `useMediaQuery` hook.
- Add bottom padding for safe area (especially on iOS).
- Consider animated transitions for chatbot opening/closing.

### 💬 Chat Experience

- Replace placeholder response with real or mocked async responses.
- Improve UX with message sending/loading animation.
- Handle empty input or validation more gracefully.

### 🧪 Developer Experience

- Add prop-types or TypeScript for component safety.
- Add simple unit tests (e.g., rendering, input behavior).
- Use ESLint/Prettier for consistent formatting.
