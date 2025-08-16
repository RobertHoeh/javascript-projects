import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Card from "../flashcards/card"
import Question from "../flashcards/question"
import React from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Flashcard App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

type QuestionType = {
  question: string,
  answer: string
}[]

const questions: QuestionType = [
  {
    question: "whuh?",
    answer: "yuh?"
  },
  {
    question: "who did this?",
    answer: "you did"
  }
]

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0)
  const [flipped, setflipped] = React.useState<boolean>(false)

  return (
    <div className="w-full h-dvh flex flex-col gap-2 justify-center items-center">
      <Card className="flex flex-col p-4">
        <Question 
          question={questions[currentQuestion].question}
          answer={questions[currentQuestion].answer}
          className="bg-gray-900 mb-4 h-48"
          flipped={flipped}
          setflipped={setflipped}/>
        <div className="flex flex-row justify-between">
          <button
          onClick={
            () => {
              if (currentQuestion != 0) {
                setCurrentQuestion(currentQuestion - 1)
                setflipped(false)
              }
            }
          }>
            &lt; Previous question
          </button>
          <button
          onClick={
            () => {
              if (currentQuestion != questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1)
                setflipped(false)
              }
            }
          }>
            Next question &gt;
          </button>
        </div>
      </Card>
    </div>
  )
}
