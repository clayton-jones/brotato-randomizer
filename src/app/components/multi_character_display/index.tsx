'use client'
import './style.scss'
import { useState, useEffect, PropsWithoutRef } from 'react';
import CharacterTile from '../character-tile';

type DisplayProp = {
    characters_left: string[];
    characters_finished: string[];
    setCharactersFinished: Function
}

export default function MultiCharacterDisplay(props: DisplayProp) {
    let {characters_left, characters_finished, setCharactersFinished} = props;
    let [tabLeftActive, setTabLeftActive] = useState(true);

    

    function moveToCharactersLeft(character: string) {
        
    }

    return(
        <section id='display-wrapper'>
            <section id='tab-wrapper'>
                <section 
                    className={'display-tab left' + (tabLeftActive ? ' active' : '')} 
                    onClick={() => setTabLeftActive(true)}
                >
                    <p>To-do</p>
                </section> 
                <section 
                    className={'display-tab right' + (tabLeftActive ? '' : ' active')} 
                    onClick={() => setTabLeftActive(false)}
                >
                    <p>Finished</p>
                </section>
            </section>

            {
                tabLeftActive ? 
                    <section className='multi-display'>
                        <section className='tile-wrapper'>
                            {
                                characters_left.length ?
                                    characters_left.map(character => {
                                        return <CharacterTile 
                                                    character_name={character.replace('.png','').replace('_', ' ')}
                                                    path={'./characters/' + character}
                                                    key={character}
                                                    onClick={() => setCharactersFinished([...characters_finished, character])}
                                                />
                                    })
                                :
                                    <p>Congratulations! You beat them all!</p>
                            }
                        </section>
                    </section>
                :
                    <section className='multi-display'>
                        <section className='tile-wrapper'>
                            {
                                characters_finished.length ?
                                    characters_finished.map(character => {
                                        return <CharacterTile 
                                                    character_name={character.replace('.png','').replace('_', ' ')}
                                                    path={'./characters/' + character}
                                                    key={character}
                                                    onClick={() => setCharactersFinished(characters_finished.filter((char) => char != character))}
                                                />
                                    })
                                :
                                    <p>You haven't marked any as beaten yet. 
                                        If you've already beaten one or more, go to the other tab and click the character to move them to this screen.
                                    </p>
                            }
                        </section>
                    </section>
            }
            
        </section>
    )
}