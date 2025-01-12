'use client'

import './style.scss'
import { useState, useEffect } from "react"

type RandomButtonProps = {
    charactersLeft: string[];
    charactersFinished: string[];
    setCharactersFinished: Function;
    winner: boolean;
    setWinner: Function
}

export default function RandomButton(props: RandomButtonProps) {
    const [imagePath, setImagePath] = useState('./base.png');
    const [characterName, setCharacterName] = useState('Click to roll');
    const [showFinishedButton, setShowFinishedButton] = useState(false)

    const {charactersLeft, charactersFinished, setCharactersFinished, winner, setWinner} = props;

    function roll() {
        if (!charactersLeft.length) {
            return
        }
        setCharacterName('')
        setShowFinishedButton(false)
        let character: string


        if (charactersLeft.length === 1) {
            character = charactersLeft[0];
            setImagePath('./characters/' + character);
            setCharacterName(character.replace('.png', '').replace('_', ' '));
            setShowFinishedButton(true);
            return
        }

        const interval = setInterval(() => {
            character = charactersLeft[getRandomInt()];
            setImagePath('./characters/' + character);
        }, 85)

        setTimeout(() => {
            clearInterval(interval)
            character = charactersLeft[getRandomInt()];
            setImagePath('./characters/' + character);
            setCharacterName(character.replace('.png', '').replace('_', ' '));
            setShowFinishedButton(true);
        }, 1000)
    }

    function resetRollButton() {
        setImagePath('./base.png');
        setShowFinishedButton(false);
        setCharacterName('Click to roll')
    }

    useEffect(() => {
        if (!charactersFinished.length) resetRollButton();
    },[charactersFinished])

    function getRandomInt(): number {
        return Math.floor(Math.random() * charactersLeft.length);
    }

    function addToFinishedClicked() {
        setCharactersFinished([...charactersFinished, characterName.replace(' ', '_').toLowerCase() + '.png'])
        setCharacterName('Click to roll')
        setShowFinishedButton(false)
        setImagePath('./base.png')
    }

    useEffect(() => {
        if (!charactersLeft.length) {
            setWinner(true)
            setImagePath('./brotato.png')
            setCharacterName('YOU WIN!')
            return
        }

        if (charactersLeft.length && imagePath == './brotato.png') {
            setImagePath('./base.png')
            setCharacterName('')
        }
    }, [charactersLeft])


    return (
        <section id='button-wrapper'  >
            <section onClick={roll} id='roll-button' className={`${winner ? 'winner' : ''}`}>
                <img src={imagePath} />
            </section>
            <p>{characterName}</p>
            <button 
                disabled={!showFinishedButton}
                onClick={addToFinishedClicked}
            >{showFinishedButton ? 'Add To Finished' : ' '}</button>
        </section>
    )
}