## 🖼️ github-webhooks-ui (Frontend React App)

This is the **frontend React app** that fetches GitHub Webhook event data from the Flask API and displays it beautifully.

### 🔗 Live UI Deployment

* ["— View GitHub events like push, pull requests, and merges visually."](https://github-webhooks-ui.vercel.app)
  

---

### 🧠 Tech Stack

* React.js (Vite)
* Axios
* Tailwind CSS (optional)
* Vercel (Frontend Hosting)

---

### ⚙️ Features

* Fetches data from Flask API `/events`
* Polls every 15 seconds for new events
* Displays data based on event type:

  * PUSH
  * PULL\_REQUEST
  * MERGE

---

### 🖥️ Backend Link

This app fetches its data from the backend Flask repo:

* 🔗 [webhook-repo (Backend)](https://github.com/Wamiquemashhadi03/webhook-repo)
* 🌐 [Live API Endpoint](https://webhook-repo-three.vercel.app/events)

---

### 📸 Screenshot

![screenshot](./Screenshot.png) <!-- Replace with your screenshot filename if needed -->

---

### 🛠️ Run Locally

```bash
git clone https://github.com/Wamiquemashhadi03/github-webhooks-ui.git
cd github-webhooks-ui
npm install
npm run dev
```

---

### 📜 License

MIT License

---

### 👨‍💻 Author

Made by [Wamique Mashhadi](https://github.com/Wamiquemashhadi03)
