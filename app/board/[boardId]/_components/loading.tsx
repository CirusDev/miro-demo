import { Loader } from "lucide-react"

import { InfoSkeleton } from "./info"
import { ParticipantsSkeleton } from "./participants"
import { ToolbarSkeleton } from "./toobar"

export const Loading = () => {
  return (
    <main
      className='relative flex h-full w-full bg-neutral-100 touch-none items-center justify-center'      
    >
      <Loader className="h-10 w-10 text-muted-foreground animate-spin" />

      <InfoSkeleton />

      <ParticipantsSkeleton />

      <ToolbarSkeleton />
    </main>
  )
}