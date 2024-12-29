'use client'
import './style.scss'
import CharacterTile from '../character-tile';
import RandomButton from '../random-button';
import Counter from '../counter';
import Lasers from '../lasers';
import { useState } from 'react';

type DisplayProp = {
    charactersLeft: string[];
    charactersFinished: string[];
    setCharactersFinished: Function;
    totalCharacterCount: number;
}

export default function MultiCharacterDisplay(props: DisplayProp) {
    let {charactersLeft, charactersFinished, setCharactersFinished, totalCharacterCount} = props;
    const [winner, setWinner] = useState(false)

    function reset() {
        setCharactersFinished([])
        setWinner(false)
    }

    return(
        <>
        <section id='display-wrapper'>
            <section className={`${winner ? 'multi-display winner' : 'multi-display'}`}>
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
            <section id='middle'>
                <Counter 
                    numberOfFinishedCharacters={charactersFinished.length}
                    totalCharacterCount={totalCharacterCount}
                    winner={winner}
                />
                <RandomButton 
                    charactersLeft={charactersLeft} 
                    setCharactersFinished={setCharactersFinished} 
                    charactersFinished={charactersFinished}
                    winner={winner}
                    setWinner={setWinner}
                />
            </section>
        
            <section className={`${winner ? 'multi-display winner' : 'multi-display'}`}>
                <section className='display-header'>Finished</section>
                <section className='tile-wrapper'>
                    {
                        charactersFinished.map(character => {
                            return <CharacterTile 
                                        character_name={character.replace('.png','').replace('_', ' ')}
                                        path={'./characters/' + character}
                                        key={character}
                                        onClick={() => {
                                            setCharactersFinished(charactersFinished.filter((char) => char != character).sort())
                                            setWinner(false)
                                        }}
                                    />
                        })
                    }
                </section>
            </section>
            
        </section>
        <section id='reset' onClick={reset}>
            <p>Reset</p>
        </section>
        <Lasers winner={winner}></Lasers>        
        </>
    )
}