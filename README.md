<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess Battle | SoCloSe Clan</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="terminal-container">
        <header>
            <h1 class="glitch">GUESS_BATTLE v1.0</h1>
            <p>SYSTEM: READY | CLAN: SoCloSe</p>
        </header>

        <div id="game-board">
            <div class="player-section">
                <h2 id="turn-display">دور اللاعب 1</h2>
                <input type="number" id="guess-input" placeholder="أدخل رقمك...">
                <button onclick="makeGuess()">تخمين</button>
            </div>
            <div id="message-area"></div>
        </div>

        <div class="stats">
            <p>المحاولات: <span id="attempts">0</span></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
