"use client"

import { colorToCSS } from "@/lib/utils"
import { Color } from "@/types/canvas"

interface Props {
  onChange: (color: Color) => void
}

export const ColorPicker = ({ onChange }: Props) => {
  return (
    <div
      className="flex flex-wrap gap-2 items-center max-w-[162px] pr-2 mr-2 border-r border-neutral-200"
    >
      <ColorButton color={{ r: 242, g: 81, b: 36 }}   onClick={onChange} />
      <ColorButton color={{ r: 254, g: 248, b: 76 }}  onClick={onChange} />
      <ColorButton color={{ r: 67, g: 201, b: 98 }}   onClick={onChange} />
      <ColorButton color={{ r: 38, g: 143, b: 236 }}  onClick={onChange} />
      <ColorButton color={{ r: 154, g: 106, b: 246 }} onClick={onChange} />
      <ColorButton color={{ r: 232, g: 140, b: 54 }}  onClick={onChange} />
      <ColorButton color={{ r: 0, g: 0, b: 0 }}       onClick={onChange} />
      <ColorButton color={{ r: 255, g: 255, b: 255 }} onClick={onChange} />
    </div>
  )
}

interface ColorButtonProps {
  onClick:  (color: Color) => void
  color:    Color
}

const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  return (
    <button
      className="flex w-8 h-8 items-center justify-center hover:opacity-75 transition"
      onClick={() => onClick(color)}
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{ background: colorToCSS(color)}} />
    </button>
  )
}