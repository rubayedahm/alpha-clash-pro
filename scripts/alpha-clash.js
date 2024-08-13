function continueGame () {
    const alphabet = getARandomAlphabet();
    
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabet

    setBgColorById(alphabet)
}

function play() {
    removeElement('home-screen');
    removeElement('final-score')
    showElementByID('play-ground')

    continueGame()
}

function gameOver() {
    removeElement('play-ground');
    showElementByID('final-score');

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet bg
    const currentAlphabet = getElementTextById('current-alphabet')
    removeBgColorById(currentAlphabet)
}

// Track keyboard button
function handleKeyboardButton(e) {
    const playerPressed = e.key;
    console.log(playerPressed)

    // Stop game if player give esc button
    if(playerPressed === 'Escape') {
        gameOver()
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet) {
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)

        removeBgColorById(expectedAlphabet)
        continueGame()
    }
    else {
       const currentLife = getTextElementValueById('current-life');
       const updatedLife = currentLife - 1;
       setTextElementValueById('current-life', updatedLife);

       if(updatedLife === 0) {
        gameOver()
       }
    }
}

document.addEventListener('keyup', handleKeyboardButton)

