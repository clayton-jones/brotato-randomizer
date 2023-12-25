'use client'
import {useState, useEffect, useRef} from 'react'
import MultiCharacterDisplay from '../multi_character_display'
import RandomButton from '../random-button';
import { finished } from 'stream';

type RandomizerProps = {
    image_array: string[];
}

export default function Randomizer(props: RandomizerProps) {
    let {image_array} = props;

    const [charactersFinished, setCharactersFinished] = useState(Array<string>())
    const [charactersLeft, setCharactersLeft] = useState(image_array)

    let initialRender = useRef(true)

    useEffect(() => {
        let storedCharacters = JSON.parse(localStorage.getItem('finished_characters') || '[]')
        setCharactersFinished(storedCharacters)
    }, [])

    useEffect(() => {
        function determineCharactersLeft(): string[] {
            return charactersFinished.length === 0 ? image_array
                : image_array.filter(character => !charactersFinished.includes(character))
        }
        if (initialRender.current) {
            initialRender.current = false;
            setCharactersLeft(determineCharactersLeft())
            return
        }
        localStorage.setItem('finished_characters', JSON.stringify(charactersFinished))
        setCharactersLeft(determineCharactersLeft())
    }, [charactersFinished])

    return (
        <>
            <RandomButton 
                charactersLeft={charactersLeft} 
                setCharactersFinished={setCharactersFinished} 
                charactersFinished={charactersFinished}
            />
            
            <MultiCharacterDisplay 
                characters_finished={charactersFinished} 
                characters_left={charactersLeft} 
                setCharactersFinished={setCharactersFinished}
            />
        </>
    )
}