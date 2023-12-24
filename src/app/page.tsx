// import CharacterTile from "./components/character-tile"
import fs from 'fs/promises'
import MultiCharacterDisplay from './components/multi_character_display'

export default async function Home() {
    const image_array = await fs.readdir("./public/characters")
    image_array.shift()
    let characters_finished: string[] = []

  return (
    <main>
      <h1 id="page-title">Brotato Randomizer</h1>
      <MultiCharacterDisplay characters_left={image_array} characters_finished={characters_finished}/>
    </main>
  )
}
