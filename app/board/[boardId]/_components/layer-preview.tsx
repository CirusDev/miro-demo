"use client"

import { useStorage } from "@/liveblocks.config"
import { memo } from "react"

import { Text } from "./text"
import { Ellipse } from "./ellipse"
import { Rectangle } from "./rectangle"
import { LayerType } from "@/types/canvas"
import { Note } from "./note"
import { Path } from "./path"
import { colorToCSS } from "@/lib/utils"

interface Props {
  id:                 string
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void
  selectionColor?:    string
}

export const LayerPreview = memo(({ id, onLayerPointerDown, selectionColor }:Props) => {
  const layer = useStorage((root) => root.layers.get(id))

  if (!layer) return null

  switch (layer.type) {
    case LayerType.Path:
      return (
        <Path 
          key={id}
          x={layer.x}
          y={layer.y}
          points={layer.points}
          onPointerDown={(e) => onLayerPointerDown(e, id)}
          fill={layer.fill ? colorToCSS(layer.fill) : "black"}
          stroke={selectionColor}          
        />
      )
    case LayerType.Note:
      return (
        <Note 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor} 
        />
      )
    case LayerType.Text:
      return (
        <Text 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor} 
        />
      )
    case LayerType.Ellipse:
      return (
        <Ellipse 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      )
    case LayerType.Rectangle:
      return (
        <Rectangle 
          id={id}
          layer={layer}
          onPointerDown={onLayerPointerDown}
          selectionColor={selectionColor}
        />
      )
    default:
      console.log("Unknown layer type")
      return null
  }
})

LayerPreview.displayName = "LayerPreview"