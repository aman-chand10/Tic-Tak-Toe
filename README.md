🎮 Tic-Tac-Toe

A simple, interactive, and visually appealing Tic-Tac-Toe game built using HTML, CSS, and JavaScript. Play against a friend in two-player mode or challenge a simple AI opponent directly in your browser.

✨ Features
🎯 Interactive Game Board — Play on a classic 3×3 grid.
👥 Two-Player Mode — Take turns playing as X and O.
🤖 AI Opponent — Play against a computer opponent that selects an available cell at random.
🏆 Win Detection — Automatically detects winning combinations across rows, columns, and diagonals.
🤝 Draw Detection — Recognizes when the board is full and neither player has won.
🎨 Winning Cell Highlighting — Highlights the winning combination when a player wins.
🔄 Reset Game — Restart the game at any time.
📱 Responsive Design — Designed for a clean, accessible browser-based gaming experience.
🛠️ Technologies Used
HTML5 — Structures the game interface.
CSS3 — Styles the board, buttons, and game layout.
JavaScript (Vanilla) — Implements game logic, player turns, win detection, draw detection, and AI moves.
📂 Project Structure
text
Tic-Tak-Toe/
├── index.html      # Game interface and layout
├── styles.css      # Styling and visual design
├── script.js       # Game logic and AI functionality
└── README.md       # Project documentation

🚀 Getting Started

Follow these steps to run the game locally.

Prerequisites

You only need a modern web browser, such as Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari.

🎮 How to Play
Two-Player Mode
Open the game in your browser.
Player X takes the first turn.
Player O plays after X.
Click an empty cell to place your mark.
Continue taking turns until a player wins or the game ends in a draw.
Play Against AI
Open the game.
Click the Play vs AI button to enable the AI opponent.
Make your move as Player X.
The AI responds as Player O by selecting a random available cell.
Try to complete a winning combination before the AI does!
Game Rules
The board consists of nine cells arranged in a 3×3 grid.
Players take turns placing X and O in empty cells.
The first player to align three marks horizontally, vertically, or diagonally wins.
If all nine cells are occupied and no player has won, the game ends in a draw.
Once the game ends, further moves are disabled until the game is reset.
Reset the Game

Click the Reset Game button to clear the board and start a new round.

🧠 How It Works

The game uses JavaScript to manage the board state and player interactions.

Board Initialization: Creates the nine interactive cells dynamically.
Move Handling: Updates the board when a player selects an empty cell.
Turn Management: Switches between X and O after each valid move.
Win Checking: Checks all eight possible winning combinations after each move.
Draw Checking: Determines whether the board is full without a winner.
AI Logic: Selects a random empty cell when playing against the computer.
Game Reset: Clears the current state and restores the initial board.
🔮 Future Improvements

Potential enhancements for future versions include:

Add difficulty levels for the AI opponent.
Implement the Minimax algorithm for smarter AI gameplay.
Keep track of player scores across multiple rounds.
Add sound effects and animations.
Improve accessibility with keyboard navigation and screen-reader support.
Deploy the game using GitHub Pages for easy online access.
🌐 Live Demo

A live demo can be added here after deployment.

Play Tic-Tac-Toe

Note: This link will work once GitHub Pages is enabled and configured for the repository.
🤝 Contributing

Contributions, suggestions, and bug reports are welcome!

Fork this repository.
Create a new branch:
bash
git checkout -b feature/your-feature

Make your changes and test them in a browser.
Commit your changes:
bash
git commit -m "Add your feature"

Push your branch:
bash
git push origin feature/your-feature

Open a pull request describing your changes.

👨‍💻 Author

Aman Chand

GitHub: @AmanChand-leo
Repository: Tic-Tak-Toe

⭐ If you enjoy this project, consider giving the repository a star!
