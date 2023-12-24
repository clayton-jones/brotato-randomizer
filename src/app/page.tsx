// import CharacterTile from "./components/character-tile"
import fs from 'fs/promises'

export default async function Home() {
    const image_array = await fs.readdir("./public/characters")
    image_array.shift()

  return (
    <main>
      <h1 id="page-title">Brotato Randomizer</h1>
    </main>
  )
}
