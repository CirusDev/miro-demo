import { Star } from "lucide-react"

import { cn } from "@/lib/utils"
import React from "react"
import { Month } from "date-fns"

interface Props {
  title:          string  
  authorLabel:    string
  createdAtLabel: string
  isFavorite:     boolean
  onClick:        () => void
  disabled:       boolean
}

export const Footer = ({ title, authorLabel, createdAtLabel, isFavorite, onClick, disabled }: Props) => {
  const handleClick = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation()
    event.preventDefault()
    onClick()
  }

  return (
    <div className="relative bg-white p-2">
      <p className="text-sm truncate max-w-[calc(100%-20px)]">
        {title}
      </p>

      <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground truncate">
        {authorLabel}, {createdAtLabel}
      </p>

      <button
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "absolute opacity-0 group-hover:opacity-100 transition top-2 right-2 text-muted-foreground hover:text-blue-500",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Star 
          className={cn(
            "h-6 w-6",
            isFavorite && "text-blue-500 fill-blue-500"
          )}
        />
      </button>
    </div>
  )
}
