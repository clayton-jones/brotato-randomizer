'use client'
import './style.scss'

type LaserProps = {
    winner: boolean
}

export default function Lasers(props: LaserProps) {
    const {winner} = props

    return (
        <section className={`${!winner ? 'laser-wrapper' : ''}`}>
            <div className="laser-beam"></div>
            <div className="laser-beam red"></div>
            <div className="laser-beam yellow"></div>
            <div className="laser-beam purple"></div>
            <div className="laser-beam green"></div>
        </section>
    )
}