import React from "react"

interface QuestionProps {
    question: string,
    answer: string,
    className?: string,
    flipped: boolean,
    setflipped: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Question({question, answer, className, flipped, setflipped}: QuestionProps) {
    return (
        <a
        className={"text-lg cursor-pointer select-none"}
        onClick = {() => setflipped(!flipped)}
        //making this an anchor tag is probably awful for accessibility, but I'll change later if I can find another way
        >
            <div className={"flex align-center justify-center" + className}>
                {!flipped && <p>{question}</p>}
                {flipped && <p>{answer}</p>}
            </div>
        </a>
    )
}