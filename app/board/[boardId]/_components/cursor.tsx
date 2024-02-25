"use client"

import { memo } from "react"
import { MousePointer2 } from "lucide-react"

import { useOther } from "@/liveblocks.config"
import { connectionIdToColor } from "@/lib/utils"

interface Props {
  connectionId: number
}

export const Cursor = memo(({ connectionId }:Props) => {
  const info = useOther(connectionId, (user) => user?.info)
  const cursor = useOther(connectionId, (user) => user.presence.cursor)

  const name = info?.name || "TeamMate"
  
  if (!cursor) return null

  const { x, y } = cursor

  return (
    <foreignObject
      className="relative drop-shadow-md"
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`
      }}
      height={50}
      width={name.length * 10 + 24}
    >
      <MousePointer2 
        className="h-5 w-5"
        style={{
          fill: connectionIdToColor(connectionId),
          color: connectionIdToColor(connectionId)
        }}
      />

      <div
        className="absolute text-xs text-white font-semibold left-5 px-1.5 py-0.5 rounded-md"
        style={{ backgroundColor: connectionIdToColor(connectionId)}}
      >
        {name}
      </div>
    </foreignObject>
  )
})

Cursor.displayName = "Cursor"