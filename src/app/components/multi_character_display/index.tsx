'use client'
import './style.scss'
import CharacterTile from '../character-tile';
import RandomButton from '../random-button';

type DisplayProp = {
    charactersLeft: string[];
    charactersFinished: string[];
    setCharactersFinished: Function
}

export default function MultiCharacterDisplay(props: DisplayProp) {
    let {charactersLeft, charactersFinished, setCharactersFinished} = props;

    return(
        <>
        <section id='display-wrapper'>
            <section className='multi-display'>
                <section className='display-header'>To-Do</section>
                <section className='tile-wrapper'>
                    {
                        charactersLeft.map(character => {
                            return <CharacterTile 
                                        character_name={character.replace('.png','').replace('_', ' ')}
                                        path={'./characters/' + character}
                                        key={character}
                                        onClick={() => setCharactersFinished([character, ...charactersFinished])}
                                    />
                        })
                    }
                </section>
            </section>

            <RandomButton 
                charactersLeft={charactersLeft} 
                setCharactersFinished={setCharactersFinished} 
                charactersFinished={charactersFinished}
            />
        
            <section className='multi-display'>
                <section className='display-header'>Finished</section>
                <section className='tile-wrapper'>
                    {
                        charactersFinished.map(character => {
                            return <CharacterTile 
                                        character_name={character.replace('.png','').replace('_', ' ')}
                                        path={'./characters/' + character}
                                        key={character}
                                        onClick={() => setCharactersFinished(charactersFinished.filter((char) => char != character).sort())}
                                    />
                        })
                    }
                </section>
            </section>
            
        </section>
        <section id='reset' onClick={() => setCharactersFinished([])}>
            <p>Reset</p>
        </section>
        </>
    )
}