document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const boardElement = document.getElementById('board');
    const statusElement = document.getElementById('status');
    const resetBtn = document.getElementById('reset-btn');
    const aiToggleBtn = document.getElementById('ai-toggle');
    
    // Game Variables
    let currentPlayer = 'X';
    let gameState = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
    let vsAI = false;
    
    // Winning Conditions
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    
    // Initialize the Game Board
    function initBoard() {
        boardElement.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-index', i);
            cell.addEventListener('click', handleCellClick);
            boardElement.appendChild(cell);
        }
    }
    
    // Handle Cell Click
    function handleCellClick(e) {
        const clickedCell = e.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));
        
        // If cell is already filled or game is not active, ignore click
        if (gameState[clickedCellIndex] !== '' || !gameActive) return;
        
        // Process the move
        makeMove(clickedCell, clickedCellIndex, currentPlayer);
        
        // If playing against AI and it's AI's turn
        if (vsAI && gameActive && currentPlayer === 'O') {
            setTimeout(makeAIMove, 500);
        }
    }
    
    // Process a move
    function makeMove(cell, index, player) {
        // Update game state and UI
        gameState[index] = player;
        cell.textContent = player;
        cell.classList.add(player.toLowerCase());
        
        // Check for win or draw
        checkGameResult();
    }
    
    // Check game result after each move
    function checkGameResult() {
        let roundWon = false;
        
        // Check all winning conditions
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (gameState[a] === '' || gameState[b] === '' || gameState[c] === '') {
                continue;
            }
            if (gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
                roundWon = true;
                break;
            }
        }
        
        // If current player has won
        if (roundWon) {
            statusElement.innerHTML = `Player <span class="player-${currentPlayer.toLowerCase()}">${currentPlayer}</span> wins!`;
            gameActive = false;
            highlightWinningCells();
            return;
        }
        
        // Check for draw
        if (!gameState.includes('')) {
            statusElement.textContent = "Game ended in a draw!";
            gameActive = false;
            return;
        }
        
        // Switch player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateStatus();
    }
    
    // Update status display
    function updateStatus() {
        statusElement.innerHTML = `Player <span class="player-${currentPlayer.toLowerCase()}">${currentPlayer}</span>'s turn`;
    }
    
    // Highlight winning cells
    function highlightWinningCells() {
        for (let condition of winningConditions) {
            const [a, b, c] = condition;
            if (gameState[a] !== '' && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                const cells = document.querySelectorAll('.cell');
                cells[a].style.backgroundColor = 'rgba(75, 192, 192, 0.2)';
                cells[b].style.backgroundColor = 'rgba(75, 192, 192, 0.2)';
                cells[c].style.backgroundColor = 'rgba(75, 192, 192, 0.2)';
                break;
            }
        }
    }
    
    // AI Move Logic
    function makeAIMove() {
        // Simple AI: find first empty cell
        // For better AI, you could implement minimax algorithm
        let availableCells = [];
        for (let i = 0; i < gameState.length; i++) {
            if (gameState[i] === '') {
                availableCells.push(i);
            }
        }
        
        if (availableCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableCells.length);
            const cellIndex = availableCells[randomIndex];
            const cell = document.querySelector(`.cell[data-index="${cellIndex}"]`);
            makeMove(cell, cellIndex, 'O');
        }
    }
    
    // Reset the Game
    function resetGame() {
        currentPlayer = 'X';
        gameState = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        updateStatus();
        initBoard();
    }
    
    // Toggle AI Opponent
    function toggleAI() {
        vsAI = !vsAI;
        aiToggleBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
            </svg>
            Play vs AI: ${vsAI ? 'ON' : 'OFF'}
        `;
        resetGame();
    }
    
    // Event Listeners
    resetBtn.addEventListener('click', resetGame);
    aiToggleBtn.addEventListener('click', toggleAI);
    
    // Initialize the Game
    initBoard();
});