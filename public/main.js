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

// suit generator//

const shuffleDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      const suit = suits[i]
      console.log(suit)
      const rank = ranks[j]
      console.log(rank)
      // Push to deck//
      deck.push(rank + ' of ' + suit)
    }
  }
  console.log(deck)
}
// const randomCard = () => {
//   document.querySelector(.)
// }

const randomPosition = () => {
  for (let i = deck.length - 1; i >= 0; i -= 1) {
    const currentCard = deck[i]

for (i < deck.length; i = 0; i++) {
  // found a random card
  const randomPosition = Math.floor(Math.random() * i--)
  // move onto new stack
  currentCard.push(deck[randomPosition]);
  deck.splice(randomPosition, 1)
  }
}
document.querySelector('.add-button'), document.addEventListener('click', randomPosition) 