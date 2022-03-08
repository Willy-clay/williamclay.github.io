document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'mountain',
            img: 'images/mountain.jpg'
        },
        {
            name: 'mountain',
            img: 'images/mountain.jpg'
        },
        {
            name: 'island',
            img: 'images/island.jpg'
        },
        {
            name: 'island',
            img: 'images/island.jpg'
        },
        {
            name: 'forest',
            img: 'images/forest.jpg'
        },
        {
            name: 'forest',
            img: 'images/forest.jpg'
        },
        {
            name: 'swamp',
            img: 'images/swamp.jpg'
        },
        {
            name: 'swamp',
            img: 'images/swamp.jpg'
        },
        {
            name: 'plains',
            img: 'images/plains.jpg'
        },
        {
            name: 'plains',
            img: 'images/plains.jpg'
        },
        {
            name: 'secluded',
            img: 'images/secluded.jpg'
        },
        {
            name: 'secluded',
            img: 'images/secluded.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    // create your board

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/mtgcardback.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)

        }
    }


    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]){
            alert('You Found A Match')
            cards[optionOneId].setAttribute('src', 'images/white.jpg')
            cards[optionTwoId].setAttribute('src', 'images/white.jpg')
            cardsWon.push(cardsChosen)
        }
        else {
            cards[optionOneId].setAttribute('src', 'images/mtgcardback.jpg')
            cards[optionTwoId].setAttribute('src', 'images/mtgcardback.jpg')
            alert('Sorry Try Again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congrats'
        }
    }





    //flipcard
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()


})