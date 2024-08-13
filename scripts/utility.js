function removeElement(elementID) {
    const element = document.getElementById(elementID);
    console.log(elementID)
    element.classList.add('hidden');
}

function showElementByID(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('hidden')
}

function setBgColorById(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('bg-orange-400')
}

function removeBgColorById(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove('bg-orange-400')
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}