let suits = ['hearts', 'clubs', 'spade', 'diamonds']

let ranks = [
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
//deck generator: suits + rank//
let deck = []

//suit generator//

const shuffleDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      const suit = suits[i]
      console.log(suit)
      const rank = ranks[j]
      console.log(rank)
      //Push to deck//
      deck.push(rank + ' of ' + suit)
    }
  }
  console.log(deck)
}

document.querySelector('.add-button').addEventListener('click', shuffleDeck)
