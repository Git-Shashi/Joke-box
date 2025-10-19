# 🎭 JOKE-BOX

A full-stack random joke generator web application that brings laughter to your day! Built with React on the frontend and Express.js on the backend, this app serves up a collection of hilarious jokes at the click of a button.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://joke-box.onrender.com)
[![Backend API](https://img.shields.io/badge/API-live-blue)](https://joke-displayer.onrender.com)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black)](https://github.com/Git-Shashi/Joke-box)

## 🌟 Features

- **Random Joke Generator**: Get a new random joke with every click
- **Clean UI**: Simple and intuitive user interface
- **Fast Performance**: Optimized for quick joke delivery
- **Setup & Punchline Format**: Classic two-part joke structure
- **RESTful API**: Separate backend service for joke management
- **Responsive Design**: Works seamlessly across all devices

## 🚀 Live Demo

- **Frontend**: [https://joke-box.onrender.com](https://joke-box.onrender.com)
- **Backend API**: [https://joke-displayer.onrender.com](https://joke-displayer.onrender.com)

## 🛠️ Tech Stack

### Frontend
- **React.js**: For building the user interface
- **CSS3**: For styling and responsive design
- **Axios/Fetch API**: For making HTTP requests to the backend

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **CORS**: For handling cross-origin requests
- **JSON**: For data storage and transfer

### Deployment
- **Render**: Hosting for both frontend and backend services

## 📂 Project Structure

```
Joke-box/
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                 # Backend Express application
│   ├── routes/
│   ├── data/              # Joke data storage
│   ├── server.js
│   └── package.json
│
└── README.md
```

## 🎯 API Endpoints

### Base URL
```
https://joke-displayer.onrender.com
```

### Get All Jokes
```http
GET /
```

**Response Example:**
```json
[
  {
    "type": "general",
    "setup": "Why don't scientists trust atoms?",
    "punchline": "Because they make up everything!",
    "id": 1
  },
  {
    "type": "general",
    "setup": "What do you call a bear with no teeth?",
    "punchline": "A gummy bear!",
    "id": 2
  }
]
```

### Get Random Joke
```http
GET /random
```

**Response Example:**
```json
{
  "type": "general",
  "setup": "Why did the scarecrow win an award?",
  "punchline": "He was outstanding in his field!",
  "id": 3
}
```

## 💻 Local Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Git-Shashi/Joke-box.git
   cd Joke-box
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   npm start
   ```
   The backend server will run on `http://localhost:5000` (or your configured port)

3. **Setup Frontend**
   ```bash
   cd client
   npm install
   npm start
   ```
   The frontend will run on `http://localhost:3000`

### Environment Variables

Create a `.env` file in the server directory:

```env
PORT=5000
NODE_ENV=development
```

Create a `.env` file in the client directory:

```env
REACT_APP_API_URL=http://localhost:5000
```

## 🎨 Usage

1. Visit the application at [https://joke-box.onrender.com](https://joke-box.onrender.com)
2. Click the "Get Joke" button to display a random joke
3. Enjoy the setup and punchline!
4. Click again for another joke

## 📝 Joke Data Structure

Each joke follows this structure:

```json
{
  "type": "general",
  "setup": "The joke setup/question",
  "punchline": "The joke punchline/answer",
  "id": 1
}
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

### Ideas for Contributions
- Add more jokes to the database
- Implement joke categories/filters
- Add a rating system
- Create user favorites functionality
- Improve UI/UX design
- Add animations and transitions
- Implement dark mode

## 🐛 Known Issues

- Initial load may take a moment as Render free tier services spin up
- Consider upgrading to paid hosting for production use

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Shashi Kumar**
- GitHub: [@Git-Shashi](https://github.com/Git-Shashi)
- Repository: [Joke-box](https://github.com/Git-Shashi/Joke-box)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped make this project better
- Inspired by the need to bring more laughter to the world
- Built with ❤️ and lots of bad puns

## 📞 Support

If you have any questions or run into issues, please:
- Open an issue on GitHub
- Check existing issues for solutions
- Contact the maintainer

---

**Made with 😄 by Shashi Kumar** | ⭐ Star this repo if you found it helpful!
