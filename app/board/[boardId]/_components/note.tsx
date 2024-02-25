import { Kalam } from "next/font/google"
import ContentEditable, { ContentEditableEvent } from "react-contenteditable"

import {  NoteLayer } from "@/types/canvas"
import { useMutation } from "@/liveblocks.config"
import { cn, colorToCSS, getContrastingTextColor } from "@/lib/utils"

const font = Kalam({
  subsets: ["latin"],
  weight: "400",
})

interface Props {
  id:               string
  layer:            NoteLayer
  onPointerDown:    (e: React.PointerEvent, id: string) => void
  selectionColor?:  string
}

const calculateFontSize = (width: number, height: number) => {
  const maxFontSize = 96
  const scaleFactor = 0.2
  const fontSizeBasedOnHeight = height * scaleFactor
  const fontSizeBasedOnWidth = width * scaleFactor

  return Math.min(maxFontSize, fontSizeBasedOnHeight, fontSizeBasedOnWidth)
}

export const Note = ({ id, layer, onPointerDown, selectionColor }: Props) => {
  const { x, y, width, height, fill, value } = layer

  const updateValue = useMutation((
    { storage },
    newValue: string,
  ) => {
    const liveLayers = storage.get("layers")
    liveLayers.get(id)?.set("value", newValue)
  }, [])

  const handleContentChange = (e: ContentEditableEvent) => {
    updateValue(e.target.value)
  }

  return (
    <foreignObject
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
        backgroundColor: fill ? colorToCSS(fill) : "black",
      }}
      className="shadow-md drop-shadow-xl"

    >
      <ContentEditable 
        className={cn(
          "flex h-full w-full items-center justify-center text-center outline-none",
          font.className
        )}
        style={{
          fontSize: calculateFontSize(width, height),
          color: fill ? getContrastingTextColor(fill) : "black",
        }}
        html={value || "Text"}
        onChange={handleContentChange}
      />
    </foreignObject>
  )
}