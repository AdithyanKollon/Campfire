# CampFire 🔥

A realtime chat application where users can join rooms and chat together. Built with **Node.js**, **Express**, and **Socket.io**, styled with **vanilla CSS** and **Font Awesome**.

## Features
- 🔑 Join chatrooms with a username
- 💬 Realtime messaging across rooms
- 🤖 Bot system messages (welcome, user join/leave)
- 📋 Sidebar with active users & room name
- ⏱️ Timestamps for each message
- 🎨 Clean and responsive UI (HTML, CSS, Font Awesome)

## Screenshots


**Join Page**
Users enter a username and choose a room:
```
[ index.html ]
```

**Chat Page**
Realtime chat in the chosen room:
```
[ chat.html ]
```

## Tech Stack
- **Backend:** Node.js, Express, Socket.io
- **Frontend:** HTML5, CSS3, Font Awesome
- **Utilities:** Moment.js for timestamps

## Project Structure
```
campfire/
├── public/
│   ├── css/
│   │   └── style.css       # Styling
│   ├── js/
│   │   └── main.js         # Frontend socket.io logic
│   ├── index.html          # Join page
│   └── chat.html           # Chatroom page
├── utils/
│   ├── messages.js         # Format messages with timestamps
│   └── user.js             # Manage users and rooms
├── server.js               # Main server (Express + Socket.io)
├── package.json            # Dependencies & scripts
└── .gitignore              # node_modules/
```

## Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/campfire.git
   cd campfire
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   npm run dev   # for development (with nodemon)
   npm start     # for production
   ```

4. Open in your browser:
   ```
   http://localhost:3000
   ```

## Usage
1. Open the app and enter a **username**.
2. Select a **chatroom** from the dropdown.
3. Start chatting in realtime!

## License
This project is licensed under the [MIT License](LICENSE).
