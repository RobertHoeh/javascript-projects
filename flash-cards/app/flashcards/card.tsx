import React from "react"
import type { PropsWithChildren } from "react"

interface CardProps {
    className?: string
}

export default function Card({ className, children }: PropsWithChildren<CardProps>) {
    return (
        <div className={"w-1/2 border-2 border-black dark:border-white rounded-lg p-4" + className || ""}>
            {children}
        </div>
    )
}