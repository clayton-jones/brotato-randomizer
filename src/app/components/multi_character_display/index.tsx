'use client'
import './style.scss'
import CharacterTile from '../character-tile';
import RandomButton from '../random-button';
import Counter from '../counter';
import { useEffect } from 'react';

type DisplayProp = {
    charactersLeft: string[];
    charactersFinished: string[];
    setCharactersFinished: Function;
    totalCharacterCount: number;
}

export default function MultiCharacterDisplay(props: DisplayProp) {
    let {charactersLeft, charactersFinished, setCharactersFinished, totalCharacterCount} = props;

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
            <section>
                <Counter 
                    numberOfFinishedCharacters={charactersFinished.length}
                    totalCharacterCount={totalCharacterCount}
                />
                <RandomButton 
                    charactersLeft={charactersLeft} 
                    setCharactersFinished={setCharactersFinished} 
                    charactersFinished={charactersFinished}
                />
            </section>
        
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