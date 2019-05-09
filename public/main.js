const suits = ['hearts', 'clubs', 'spade', 'diamonds']

const face = [
  { rank: 'Ace', value: 11 },
  { rank: '2', value: 2 },
  { rank: '3', value: 3 },
  { rank: '4', value: 4 },
  { rank: '5', value: 5 },
  { rank: '6', value: 6 },
  { rank: '7', value: 7 },
  { rank: '8', value: 8 },
  { rank: '9', value: 9 },
  { rank: '10', value: 10 },
  { rank: 'Jack', value: 10 },
  { rank: 'Queen', value: 10 },
  { rank: 'King', value: 10 }
]

let deck = []
let shownCard = []

// create deck//
const createDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    console.log(suits) // get suit
    for (let j = 0; j < face.length; j++) {
      // deck generator: suits + face//

      const card = {
        ranks: face[j].rank,
        suits: suits[i],
        value: face[j].value,
        imageUrl: face[j].rank + '_of_' + suits[i] + '.png'
      }

      // Push creation to deck//
      deck.push(card)
      console.log('card pushed to deck')
    }
  }
}

// Shuffle //

const shuffle = () => {
  shownCard = []
  for (let a = deck.length - 1; a > 0; a--) {
    let randomCard = Math.floor(Math.random() * deck.length)

    let tempCard = deck[a]

    deck[a] = deck[randomCard]
    randomCard = tempCard
    tempCard = deck[a]

    console.log(deck[a])
    shownCard.push(deck[a])
  }
}

const main = () => {
  createDeck()
  shuffle()
}

// deal //
const dealCard = () => {}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.shuffle').addEventListener('click', createDeck)
document.querySelector('.deal').addEventListener('click', dealCard)
