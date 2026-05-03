let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function makeGuess() {
    const input = document.getElementById('guess-input');
    const messageArea = document.getElementById('message-area');
    const guess = parseInt(input.value);
    
    if (isNaN(guess)) return;

    attempts++;
    document.getElementById('attempts').innerText = attempts;

    if (guess === targetNumber) {
        messageArea.innerHTML = `<p style="color: white;">تم الاختراق بنجاح! الرقم هو ${targetNumber}</p>`;
        messageArea.innerHTML += `<button onclick="location.reload()">إعادة اللعب</button>`;
    } else if (guess < targetNumber) {
        messageArea.innerText = "النظام: الرقم المطلوب أعلى من ذلك...";
    } else {
        messageArea.innerText = "النظام: الرقم المطلوب أقل من ذلك...";
    }
    
    input.value = '';
    input.focus();
}
