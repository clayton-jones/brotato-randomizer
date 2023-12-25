import fs from 'fs/promises'
import Randomizer from './components/randomizer'
export default async function Home() {
    const image_array = await fs.readdir("./public/characters")
    // image_array.shift()

  return (
    <main>
      <h1 id="page-title">Brotato Randomizer</h1>
      <Randomizer image_array={image_array}/>
      <footer>Created by Clayton Jones</footer>
    </main>
  )
}
