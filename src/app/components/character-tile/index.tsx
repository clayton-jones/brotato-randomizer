'use client'
import './style.scss'
import { useState, useEffect } from "react";

export interface CharacterInfo {
    character_name: string,
    path: string
}



export default function CharacterTile(props: CharacterInfo) {
    let [showName, setShowName] = useState(false)
    let {character_name, path} = props;

    useEffect(() => {}, [showName])

    return (
      <section className="character-tile" onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)} >
        {
          showName ?
            <section>
              <p>{character_name}</p>
            </section>
          :
            <section>
              <img src={path} />
            </section>
        }
      </section>
      
    )
  }