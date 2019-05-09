const suits = ['hearts', 'clubs', 'spade', 'diamonds']

const ranks = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'jack',
  'queen',
  'king'
]
// deck generator: suits + rank//
const deck = []

const createDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    console.log(suits) // get suit
    for (let j = 0; j < ranks.length; j++) {
      //get face
      // Push to deck//
      const card = {
        ranks: ranks[j],
        suits: suits[i]
      }
      deck.push(card)
      console.log('card pushed to deck')
    }
  }
}

// console.log(deck)
// console.log(shuffle)

// const shuffle = () => {
// // move card
// for (i=deck.length-1; i > 0; i--) {
// let randomCard = math.floor(math.random() * (i+1))
// let tempCard = deck[i]
// deck[i] = deck[randomCard]
// deck[randomCard] = tempCard
// }
// }

// document.addEventListener('DOMContentLoaded', main)
document.querySelector('.shuffle').addEventListener('click', createDeck)
