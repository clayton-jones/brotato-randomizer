'use client'
import './style.scss'
import { useState, useEffect } from "react";

export interface CharacterInfo {
    character_name: string,
    path: string,
    onClick: any
}



export default function CharacterTile(props: CharacterInfo) {
    let [showName, setShowName] = useState(false)
    let {character_name, path, onClick} = props;

    useEffect(() => {}, [showName])

    return (
      <section 
        className="character-tile" 
        onMouseEnter={() => setShowName(true)} 
        onMouseLeave={() => setShowName(false)}
        onClick={onClick}
      >
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