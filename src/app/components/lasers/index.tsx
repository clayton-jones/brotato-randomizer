'use client'
import { secureHeapUsed } from 'crypto'
import './style.scss'

export default function Lasers() {
    return (
        <section>
            <div className="laser-beam"></div>
            <div className="laser-beam red"></div>
            <div className="laser-beam yellow"></div>
            <div className="laser-beam purple"></div>
            <div className="laser-beam green"></div>
        </section>
    )
}