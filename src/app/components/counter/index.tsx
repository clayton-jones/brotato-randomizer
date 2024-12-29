'use client'
import { useState, useEffect, useRef } from 'react';
import './style.scss'

type CounterProps = {
    numberOfFinishedCharacters: number;
    totalCharacterCount: number;
    winner: boolean;
}

export default function Counter(props: CounterProps) {
    const { numberOfFinishedCharacters, totalCharacterCount, winner } = props;
    const [pulsate, setPulsate] = useState(false);

    let initialRender = useRef(0)

    useEffect(() => {
        if (initialRender.current < 3) {
            initialRender.current += 1;
            return
        }

        if (!pulsate) {
            setPulsate(true);
            setTimeout(() => {setPulsate(false)}, 100)
        }

    }, [numberOfFinishedCharacters])
    
    return (
        <section id='counter' className={`${winner ? 'win' : ''}`}>
            {`${numberOfFinishedCharacters} / ${totalCharacterCount}`}
        </section>
    )
}