function continueGame () {
    const alphabet = getARandomAlphabet();
    
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabet

    setBgColorById(alphabet)
}

function play() {
    removeElement('home-screen');
    showElementByID('play-ground')
    continueGame()
}

