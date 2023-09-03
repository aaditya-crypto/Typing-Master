const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "Programming is the art of telling another human what one wants the computer to do.",
    "To be or not to be: that is the question.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts." ,
    "The only limit to our realization of tomorrow will be our doubts of today." ,
    "In the middle of every difficulty lies opportunity." ,
    "Your time is limited, don't waste it living someone else's life." ,
    "The future belongs to those who believe in the beauty of their dreams." ,
    "The greatest glory in living lies not in never falling, but in rising every time we fall." ,
    "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it." ,
    "The best revenge is massive success." ,
    "If you want to achieve greatness stop asking for permission." ,
    "The harder I work, the luckier I get." ,
    "I find that the harder I work, the more luck I seem to have." ,
    "The secret to getting ahead is getting started." ,
    "Don't count the days, make the days count." ,
    "Success usually comes to those who are too busy to be looking for it." ,
    "You don't have to be great to start, but you have to start to be great." ,
    "Believe you can and you're halfway there." ,
    "Opportunities don't happen. You create them." ,
    "The only place where success comes before work is in the dictionary." ,
    "Don't watch the clock; do what it does. Keep going." ,
    "Success is walking from failure to failure with no loss of enthusiasm." ,
    "The road to success and the road to failure are almost exactly the same." ,
    "The successful warrior is the average man, with laser-like focus." ,
    "You miss 100% of the shots you don't take." ,
    "Success is not in what you have, but who you are." ,
    "Success is stumbling from failure to failure with no loss of enthusiasm." ,
    "Success is the sum of small efforts repeated day in and day out." ,
    "The future depends on what you do today." ,
    "The way to get started is to quit talking and begin doing." ,
    "It does not matter how slowly you go as long as you do not stop." ,
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." ,
    "The best time to plant a tree was 20 years ago. The second best time is now." ,
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible." ,
    "The successful man is the one who finds out what is the matter with his business before his competitors do." ,
    "The only place where success comes before work is in the dictionary." ,
    "Success is not how high you have climbed, but how you make a positive difference to the world.", 
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", 
    "Success is doing what you love and being able to give it back to others." ,
    "The road to success and the road to failure are almost exactly the same." ,
    "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible." ,
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart." ,
    "Success is not how high you have climbed, but how you make a positive difference to the world." ,
    "The only limit to our realization of tomorrow will be our doubts of today.", 
    "The best revenge is massive success.", 
    "Success is not final, failure is not fatal: It is the courage to continue that counts.", 
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." ,
    "Success usually comes to those who are too busy to be looking for it.", 
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", 
    "The successful warrior is the average man, with laser-like focus." ,
    "Success is not in what you have, but who you are." 






];

let currentQuoteIndex;
let startTime;
let timerInterval;
let isGameStarted = false;

const quoteElement = document.getElementById("quote");
const inputElement = document.getElementById("input");
const timerElement = document.getElementById("timer");
const accuracyElement = document.getElementById("accuracy");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", startGame);

function startGame() {
    if (!isGameStarted) {
        currentQuoteIndex = getRandomQuoteIndex();
        displayQuote();
        inputElement.value = "";
        inputElement.focus();
        startTime = Date.now();
        isGameStarted = true;
        startButton.textContent = "Restart Test";
        timerInterval = setInterval(updateTimer, 1000);
    } else {
        
    }
}

function getRandomQuoteIndex() {
    return Math.floor(Math.random() * quotes.length);
}

function displayQuote() {
    quoteElement.textContent = quotes[currentQuoteIndex];
}

function updateTimer() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const remainingTime = 60 - elapsedTime;

    if (remainingTime <= 0) {
        endGame();
    } else {
        timerElement.textContent = `Time left: ${remainingTime}s`;
    }
}

function endGame() {
    clearInterval(timerInterval);
    isGameStarted = false;
    inputElement.disabled = true;

    const typedText = inputElement.value.trim();
    const targetText = quotes[currentQuoteIndex];
    
    const accuracy = calculateAccuracy(typedText, targetText);
    
    timerElement.textContent = "Time's up!";
    accuracyElement.textContent = `Accuracy: ${accuracy.toFixed(2)}%`;
    
    if (typedText === targetText) {
        setTimeout(startGame, 1000);
    }
}

function calculateAccuracy(typedText, targetText) {
    const typedWords = typedText.split(" ");
    const targetWords = targetText.split(" ");
    let correctWords = 0;

    for (let i = 0; i < typedWords.length; i++) {
        if (typedWords[i] === targetWords[i]) {
            correctWords++;
        }
    }

    return (correctWords / targetWords.length) * 100;
}
