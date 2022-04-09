function putInFrench() {
    document.querySelector('h1').innerText = 'Générateur d\'ironie';
    document.querySelector('h2').innerText = 'Entrez un texte et tRaNsFOrmEz-lE eN iRoNiE';
    document.querySelector('.input h3').innerText = 'Entrez du texte';
    document.querySelector('.input button').innerText = 'Envoyer';
    document.getElementById('you-wrote').innerHTML = 'Vous avez écrit "<span id="show-result"></span>"';
    document.querySelector('.bubble h3').innerText = "Le texte a été copié";
    document.getElementById('the-result-is').innerHTML = 'Le texte ironique est "<span id="show-irony"></span>"';
    document.getElementById('gb-button').classList.remove('chosen-btn');
    document.getElementById('fr-button').classList.add('chosen-btn');
    if (inputed) {
        document.getElementById('show-result').innerText = inputed;
    }
    if (newResult) {
        document.getElementById('show-irony').innerText = newResult;
    }
}

function putInEnglish() {
    document.querySelector('h1').innerText = 'Irony Generator';
    document.querySelector('h2').innerText = 'Enter text and get iRoNy aS A rEsuLt';
    document.querySelector('.input h3').innerText = 'Enter text';
    document.querySelector('.input button').innerText = 'Submit';
    document.getElementById('you-wrote').innerHTML = 'You wrote "<span id="show-result"></span>"';
    document.querySelector('.bubble h3').innerText = "The text has been copied";
    document.getElementById('the-result-is').innerHTML = 'The ironic text is "<span id="show-irony"></span>"';
    document.getElementById('gb-button').classList.add('chosen-btn');
    document.getElementById('fr-button').classList.remove('chosen-btn');
    if (inputed) {
        document.getElementById('show-result').innerText = inputed;
    }
    if (newResult) {
        document.getElementById('show-irony').innerText = newResult;
    }
}