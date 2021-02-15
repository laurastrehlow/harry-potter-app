import AppHeader from './components/AppHeader'
import getCharacters from './services/getCharacters'
import Card from './components/Card'
import HouseFilter from './components/HouseFilter'
import createElement from './lib/createElement'

export default function App() {
  const header = AppHeader('Daily Prophet')
  const houseFilter = HouseFilter(onFilterByHouse)
  const cardContainer = createElement('div')
  document.body.append(header, houseFilter, cardContainer)

  let characters

  getCharacters()
    .then(data => {
      createCards(data)
      characters = data
    })
    .catch(error => handleGetCharacterError(error))

  function createCards(characters) {
    const cards = characters.map(character =>
      Card(
        character.image,
        character.name,
        character.house,
        character.species,
        character.gender
      )
    )
    cardContainer.innerHTML = ''
    cardContainer.append(...cards)
  }

  function onFilterByHouse(house) {
    const filteredByHouse = characters.filter(
      character => house == null || character.house === house
    )

    createCards(filteredByHouse)
  }

  function handleGetCharacterError(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color: crimson;' },
      error.message
    )
    document.body.append(errorMessage)
  }
}
