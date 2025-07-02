let cards = [];
let currentIndex = 0;

function showCard() {
    if (cards.length === 0) {
        document.getElementById('question').innerText = "Noch keine Karten vorhanden.";
        document.getElementById('answer').classList.add('hidden');
        return;
    }

    let currentCard = cards[currentIndex];
    document.getElementById('question').innerText = currentCard.question;
    document.getElementById('answer').innerText = currentCard.answer;
    document.getElementById('answer').classList.add('hidden');
}

function nextCard() {
    if (cards.length === 0) return;
    currentIndex = (currentIndex + 1) % cards.length;
    showCard();
}

function prevCard() {
    if (cards.length === 0) return;
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard();
}

function showAnswer() {
    document.getElementById('answer').classList.remove('hidden');
}

function addCard() {
    let q = document.getElementById('newQuestion').value.trim();
    let a = document.getElementById('newAnswer').value.trim();

    if (q && a) {
        if (cards.length >= 50) {
            alert("Maximal 50 Karten erlaubt.");
            return;
        }

        cards.push({ question: q, answer: a });
        document.getElementById('newQuestion').value = '';
        document.getElementById('newAnswer').value = '';
        currentIndex = cards.length - 1;
        showCard();
    } else {
        alert("Bitte Frage und Antwort ausfüllen.");
    }
}

showCard();
