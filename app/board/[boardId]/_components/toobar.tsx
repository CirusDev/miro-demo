import { Circle, MousePointer2, Pencil, Redo2, Square, StickyNote, Type, Undo2 } from "lucide-react"

import { CanvasMode, CanvasState, LayerType } from "../../../../types/canvas"
import { ToolButton } from "./tool-button"

interface Props {
  canavasState:     CanvasState
  setCanvasState:   (newState: CanvasState) => void
  undo:             () => void
  redo:             () => void
  canUndo:          boolean
  canRedo:          boolean
}

export const Toolbar = ({ canavasState, setCanvasState, undo, redo, canUndo, canRedo }: Props) => {
  return (
    <div
      className='absolute flex flex-col top-1/2 -translate-y-1/2 left-2 gap-y-4'
    >
      <div className="flex flex-col bg-white p-1.5 gap-y-1 rounded-md items-center shadow-md">
        <ToolButton 
          label="Select"
          icon={MousePointer2}
          isActive={
            canavasState.mode === CanvasMode.None ||
            canavasState.mode === CanvasMode.Translating ||
            canavasState.mode === CanvasMode.SelectionNet ||
            canavasState.mode === CanvasMode.Pressing ||
            canavasState.mode === CanvasMode.Resizing
          }
          onClick={() => setCanvasState({ 
            mode: CanvasMode.None 
          })}
        />
        
        <ToolButton 
          label="Text"
          icon={Type}
          isActive={
            canavasState.mode === CanvasMode.Inserting &&
            canavasState.layerType === LayerType.Text
          }
          onClick={() => setCanvasState({ 
            mode:       CanvasMode.Inserting,
            layerType:  LayerType.Text
          })}
        />
        
        <ToolButton 
          label="Sticky Note"
          icon={StickyNote}
          isActive={
            canavasState.mode === CanvasMode.Inserting &&
            canavasState.layerType === LayerType.Note
          }
          onClick={() => setCanvasState({ 
            mode:       CanvasMode.Inserting,
            layerType:  LayerType.Note
          })}
        />
        
        <ToolButton 
          label="Rectangle"
          icon={Square}
          isActive={
            canavasState.mode === CanvasMode.Inserting &&
            canavasState.layerType === LayerType.Rectangle
          }
          onClick={() => setCanvasState({ 
            mode:       CanvasMode.Inserting,
            layerType:  LayerType.Rectangle
          })}
        />
        
        <ToolButton 
          label="Ellipse"
          icon={Circle}
          isActive={
            canavasState.mode === CanvasMode.Inserting &&
            canavasState.layerType === LayerType.Ellipse
          }
          onClick={() => setCanvasState({ 
            mode:       CanvasMode.Inserting,
            layerType:  LayerType.Ellipse
          })}
        />
        
        <ToolButton 
          label="Pen"
          icon={Pencil}
          isActive={
            canavasState.mode === CanvasMode.Pencil
          }
          onClick={() => setCanvasState({ 
            mode:       CanvasMode.Pencil
          })}
        />
      </div>
        

      <div className='flex flex-col bg-white rounded-md p-1.5 items-center shadow-md'>
        <ToolButton 
          label="Undo"
          icon={Undo2}
          isDisabled={!canUndo}
          onClick={undo}
        />
        
        <ToolButton 
          label="Redo"
          icon={Redo2}
          isDisabled={!canRedo}
          onClick={redo}
        />
      </div>
    </div>
  )
}

export const ToolbarSkeleton = () => {
  return (
    <div
      className='absolute flex flex-col top-1/2 -translate-y-1/2 left-2 gap-y-4 bg-white h-[360px] w-[52px] shadow-md rounded-md'
    />
  )
}