"use client"

import { useQuery } from "convex/react"
import Image from "next/image"
import { Poppins } from "next/font/google"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Hint } from "@/components/hint"
import { api } from "@/convex/_generated/api"
import { Actions } from "@/components/actions"
import { Button } from "@/components/ui/button"
import { Id } from "@/convex/_generated/dataModel"
import { useRenameModal } from "@/store/use-rename-modal"
import { Menu } from "lucide-react"

interface Props {
  boardId:  string
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"]
})

const TabSeparator = () => {
  return (
    <div className="text-neutral-300 px-1.5">|</div>
  )
}

export const Info = ({ boardId }: Props) => {
  const { onOpen } = useRenameModal()
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">
  })

  if (!data) return <InfoSkeleton />

  return (
    <div
      className='absolute flex top-2 left-2 bg-white rounded-md p-1.5 h-12 items-center shadow-md'
    >
      <Hint label="Go to boards" side="bottom" sideOffset={6}>
        <Button variant={"board"} className="px-2" asChild>
          <Link href={"/"}>
            <Image 
              src={"/logo.svg"}
              alt="Logo"
              height={40}
              width={40}
              />

            <span className={cn(
              "font-semibold text-xl ml-2 text-black",
              poppins.className
              )}>
              Board
            </span>
          </Link>
        </Button>
      </Hint>

      <TabSeparator />

      <Hint label="Edit title" side="bottom" sideOffset={6}>
        <Button 
          variant={"board"} 
          className="text-base font-normal px-2"
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>

      <TabSeparator />

      <Actions
        id={data._id}
        title={data.title}
        side="bottom"
        sideOffset={6}
      >
        <div>
          <Hint label="Main memu" side="bottom" sideOffset={6}>
            <Button size={"icon"} variant={"board"}>
              <Menu />
            </Button>
          </Hint>
        </div>

      </Actions>
    </div>
  )
}

export const InfoSkeleton = () => {
  return (
    <div  
      className='absolute top-2 left-2 bg-white rounded-md p-1.5 h-12 items-center shadow-md w-[300px]'
    />
  )
}
