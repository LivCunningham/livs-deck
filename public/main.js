const suits = ['Hearts', 'Clubs', 'Spade', 'Diamonds']

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
let player1 = []
let dealer = []

// create deck//
const createDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    console.log(suits) // get suit
    for (let j = 0; j < face.length; j++) {
      // deck generator: suits + face//

      const card = {
        ranks: face[j].rank,
        value: face[j].value,
        suit: suits[i],

        imageUrl:
          './pics/' + face[j].rank.slice(0, 1) + suits.slice(0, 1) + '.jpg'
      }
      // Push creation to deck//
      deck.push(card)
      console.log('card pushed to deck')
    }
  }
}

// Shuffle //

const shuffle = () => {
  for (let a = deck.length - 1; a > 0; a--) {
    let randomCard = Math.floor(Math.random() * deck.length)

    let tempCard = deck[a]

    deck[a] = deck[randomCard]
    randomCard = tempCard
    tempCard = deck[a]

    console.log(deck[a])
    deck.push(deck[a])
  }
}

// deal //

const dealCard = () => {
  const takeCard = deck.pop()
  // create image element
  const imageTag = document.createElement('img')
  imageTag.src = takeCard.imageUrl
  imageTag.setAttribute('class', 'card')
  const playerHand = document.querySelector('.player1-hand')
  player1.push(takeCard)
  playerHand.appendChild(imageTag)
}

// document.querySelector('.output').textContent =
//   takenCard.suits +
//   'of' +
//   takenCard.ranks +
//   'has a value of' +
//   takenCard.value

const main = () => {
  createDeck()
  shuffle()
}

const play = () => {
  shuffle()
  dealCard()
  dealCard()
  const takeCard = deck.pop()
  const takeCard2 = deck.pop()
  dealer.push(takeCard, takeCard2)
  console.log(dealer, player1)
}

const stay = () => {
  const dealHand = document.querySelector('.dealers-hand')
  const card1 = document.createElement('img')
  const card2 = document.createElement('img')
  card1.src = dealer[0].imageUrl
  card2.src = dealer[1].imageUrl
  card1.setAttribute('class', 'card')
  card2.setAttribute('class', 'card')
  dealHand.appendChild(card1)
  dealHand.appendChild(card2)
}

document.querySelector('.shuffle').addEventListener('click', shuffle)
document.querySelector('.deal').addEventListener('click', dealCard)
document.querySelector('.stay').addEventListener('click', stay)
document.querySelector('.play').addEventListener('click', play)
// document.querySelector('.hit').addEventListener('click',hit)

document.addEventListener('DOMContentLoaded', main)
