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
let playerScore = 0
// let dealerHand = []
// let dealerScore = []
let dealerHand = []
let dealerScore = 0
// create deck//
const main = () => {
  for (let i = 0; i < suits.length; i++) {
    const suit = suits[i]
    console.log(suits) // get suit
    for (let j = 0; j < face.length; j++) {
      // deck generator: suits + face//

      const card = {
        rank: face[j].rank,
        value: face[j].value,
        suits: suits[i],
        imageUrl:
          './stills/' + face[j].rank.slice(0, 1) + suit.slice(0, 1) + '.jpg'
      }

      if (card.rank === '10') {
        // Set the imageUrl of the card to the correct value
        card.imageUrl = './still/' + '10' + suit.slice(0, 1) + '.jpg'
      }
      // Push creation to deck//
      deck.push(card)
      console.log('card pushed to deck')
    }
  }
}

// Shuffle //

const shuffle = () => {
  for (let i = deck.length - 1; i > 0; i--) {
    let randomCard = Math.floor(Math.random() * 52)

    let tempCard = deck[i]

    deck[i] = deck[randomCard]
    randomCard = tempCard
    tempCard = deck[i]

    console.log(deck[i])
    deck.push(deck[i])
  }
}

// deal //

const dealCard = () => {
  const takeCard = deck.pop()
  // create image element
  const imageTag = document.createElement('img')
  // add new card to HTML
  imageTag.src = takeCard.imageUrl
  imageTag.setAttribute('class', 'card')
  const playerHand = document.querySelector('.player-1-hand')
  player1.push(takeCard)
  playerHand.appendChild(imageTag)
  // update player score
  // start at zero
  // add the value of the card to the player
  playerScore += takeCard.value
  // update HTML
  document.querySelector('.player-score').textcontent = playerScore
}

// document.querySelector('.output').textContent =
//   takenCard.suits +
//   'of' +
//   takenCard.ranks +
//   'has a value of' +
//   takenCard.value

// const main = () => {
//   createDeck()
//   shuffle()
// }

const play = () => {
  shuffle()
  dealCard()
  dealCard()
  const takeCard = deck.pop()
  const takeCard2 = deck.pop()
  dealer.push(takeCard, takeCard2)
  console.log(dealer, player1)
  document.querySelector('.play').disabled = true
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
  document.querySelector('.deal').disabled = true
  document.querySelector('.stay').disabled = true
}

const dealCardToDealer = () => {
  const dealtCard = deck.pop()
  // add to dealer hand (push)
  dealerHand.push(dealtCard)
  // add the new card to the HTML
  // create the new element
  const img = document.createElement('img')
  // set the content
  img.src = '/images/cards/card-back.png'
  // add new element to the HTML
  // const li = document.createElement('li')
  // li.appendChild(img)
  document.querySelector('.dealer-hand').appendChild(img)
  // update the dealer score
  // add the value of the card to the dealer
  dealerScore += dealtCard.value
  // update the html
  document.querySelector('.dealer-score').textContent = dealerScore
}

document.querySelector('.shuffle').addEventListener('click', shuffle)
document.querySelector('.deal').addEventListener('click', dealCard)
document.querySelector('.stay').addEventListener('click', stay)
document.querySelector('.play').addEventListener('click', play)

document.addEventListener('DOMContentLoaded', main)
