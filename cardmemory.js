// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select important elements from the DOM
    const deck = document.querySelector('.deck');
    const reset = document.querySelector('.reset-button');
    const movesCounter = document.querySelector('.move');
    const timerDisplay = document.querySelector('.time');

    // Initialize game variables
    let moves = 0;
    let matchCount = 0;
    let timer = null;
    let seconds = 0;
    let isGameStarted = false; 
    let cardsFlipped = [];

    // Array of card symbols
    const cardSymbols = shuffle([
        "😀", "😀",
        "😍", "😍",
        "😂", "😂",
        "🥰", "🥰",
        "😊", "😊",
        "😎", "😎",
        "🤩", "🤩",
        "😜", "😜",
        "😘", "😘",
        "😋", "😋",
        "🤗", "🤗",
        "🤔", "🤔",
        "😄", "😄"
    ]);

    //shuffle
    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    
    // Create a card
    function createCard(symbol) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.symbol = symbol;
        cardElement.innerHTML = `
            <div class="card-face card-front"></div>
            <div class="card-face card-back">${symbol}</div>`;
        cardElement.addEventListener('click', () => flipCard(cardElement));
        return cardElement;
    }

    // Initialize the game board
    function initialize() {
        const shuffledSymbols = shuffle([...cardSymbols]);
        deck.innerHTML = '';
        shuffledSymbols.forEach(symbol => {
            const cardElement = createCard(symbol);
            deck.appendChild(cardElement);
        });
    }

    // Start a new game
    function startGame() {
        moves = 0;
        matchCount = 0;
        seconds = 0;
        isGameStarted = false; 
        cardsFlipped = [];
        initialize();
        updateMoveCounter();
        resetTimer();
    }

    // Flip a card
    function flipCard(card) {
        if (card.classList.contains('flipped') || cardsFlipped.length === 2 || cardsFlipped.includes(card)) return;

        if (!isGameStarted) {
            isGameStarted = true;
            startTimer();
        }
        
        card.classList.add('flipped');
        cardsFlipped.push(card);

        if (cardsFlipped.length === 2) {
            checkForMatch();
        }
    }

    // Check if two flipped cards match
    function checkForMatch() {
        moves++;
        updateMoveCounter();
    
        if (cardsFlipped[0].dataset.symbol === cardsFlipped[1].dataset.symbol) {
            matchCount++;
            cardsFlipped.forEach(card => card.classList.add('matched'));
            if (matchCount * 2 === cardSymbols.length) {
                setTimeout(gameOver, 500);
            }
            cardsFlipped = [];
        } else {
            setTimeout(() => {
                cardsFlipped.forEach(card => {
                    if (!card.classList.contains('matched')) {
                        card.classList.remove('flipped');
                    }
                });
                cardsFlipped = [];
            }, 1000);
        }
    }

    // Update the move counter displayed on the screen
    function updateMoveCounter() {
        movesCounter.textContent = `${moves} Moves`;
    }

    // Start the timer
    function startTimer() {
        if (timer === null) {
            timer = setInterval(() => {
                seconds++;
                timerDisplay.textContent = formatTime(seconds);
            }, 1000);
        }
    }

    // Stop the timer
    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }

    // Reset the timer to 0
    function resetTimer() {
        stopTimer();
        seconds = 0;
        timerDisplay.textContent = formatTime(0);
    }

    // Format the time in MM:SS format
    function formatTime(sec) {
        const minutes = Math.floor(sec / 60);
        const secs = sec % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // End the game and show a congratulations message
    function gameOver() {
        stopTimer();
        alert(`Congratulations! You've completed the game in ${formatTime(seconds)} with ${moves} moves.`);
    }

    // Event listener for the reset button to start a new game
    reset.addEventListener('click', startGame);

    // Start the game when the page loads
    startGame(); 
});