"use client"

import Image from "next/image"
import { useOrganization, useOrganizationList } from "@clerk/nextjs"

import { cn } from "../../../../lib/utils"
import { Hint } from "../../../../components/hint"

interface Props {
  id:       string
  name:     string
  imageUrl: string
}

export const Item = ({ id, name, imageUrl }: Props) => {
  const { organization } = useOrganization()
  const { setActive } = useOrganizationList()

  const isActive = organization?.id === id

  const onClick = () => {
    if (!setActive) return

    setActive({ organization: id })
  }

  return (
    <div className="relative aspect-square">
      <Hint
        label={name}
        side="right"
        align="start"
        sideOffset={18}
      >
        <Image
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
            isActive && "opacity-100"
          )} 
          fill
          src={imageUrl}
          alt={name}
          onClick={onClick}
        />
      </Hint>
    </div>
  )
}
