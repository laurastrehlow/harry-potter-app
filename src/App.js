import AppHeader from './components/AppHeader'
import getCharacters from './services/getCharacters'
import Card from './components/Card'
import createElement from './lib/createElement'

export default function App() {
  const header = AppHeader('Daily Prophet')
  document.body.append(header)

  getCharacters()
    .then(characters => createCards(characters))
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
    document.body.append(...cards)
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
