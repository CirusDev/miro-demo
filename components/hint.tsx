import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "./ui/tooltip"

export interface HintProps {
  label:        string
  children:     React.ReactNode
  side?:        "top" | "bottom" | "left" | "right"
  align?:       "start" | "center" | "end"
  sideOffset?:  number
  alignOffset?: number
}

export const Hint = ({
  label,
  children,
  side,
  align,
  sideOffset,
  alignOffset,
}: HintProps) => {
  return (
    <TooltipProvider>
      {/* <Tooltip side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}> */}
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        
        <TooltipContent className="text-white bg-black border-black px-2 pb-1"
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
        >
          <p className="text-xs font-semibold capitalize">
            {label}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )  
}