import fs from 'fs/promises'
import Randomizer from './components/randomizer'
export default async function Home() {
    const image_array = await fs.readdir("./public/characters")
    // image_array.shift()

  return (
    <main>
      <h1 id="page-title">Brotato Randomizer</h1>
      <h2 id='subtitle'>{'& Challenge Tracker'}</h2>
      <Randomizer image_array={image_array}/>
      <footer>
        <p>Created by Clayton Jones</p>
        
        <a href='www.linkedin.com/in/claytonjjones'>
          <img src="./linkedin.png" alt="linkedin-icon" />
          linkedin.com/in/claytonjjones
        </a>
      </footer>
    </main>
  )
}
