'use client'

type CounterProps = {
    numberOfFinishedCharacters: number;
    totalCharacterCount: number;
}

export default function Counter(props: CounterProps) {
    const { numberOfFinishedCharacters, totalCharacterCount } = props;
    
    return (
        <section>{`${numberOfFinishedCharacters} / ${totalCharacterCount}`}</section>
    )
}