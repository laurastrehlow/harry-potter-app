import './Card.css'
import createElement from '../../lib/createElement'

export default function Card(imageUrl, name, house) {
  const Card = createElement(
    'section',
    { className: 'Card' },
    imageUrl,
    name,
    house
  )
  Card.style.background = getBackgroundColorByHouse(house)
  Card.style.color = getColorByHouse(house)
  Card.innerHTML = `
  <img class="image" height="110" src="${imageUrl}">
  <h2>${name}</h2>
  <h3>${house}</h3>
 `

  function getBackgroundColorByHouse(house) {
    if (house === 'Gryffindor') return '#9c1203'
    if (house === 'Slytherin') return '#033807'
    if (house === 'Hufflepuff') return '#e3a000'
    if (house === 'Ravenclaw') return '#00165e'
  }

  function getColorByHouse(house) {
    if (house === 'Gryffindor') return '#FFC500'
    if (house === 'Slytherin') return '#AAAAAA'
    if (house === 'Hufflepuff') return 'black'
    if (house === 'Ravenclaw') return '#946B2D'
  }
  return Card
}