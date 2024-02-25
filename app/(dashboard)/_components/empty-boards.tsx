"use client"

import { useRouter } from "next/navigation"
import { useOrganization } from "@clerk/nextjs"
import Image from "next/image"
import { toast } from "sonner"

import { Button } from "../../../components/ui/button"
import { api } from "../../../convex/_generated/api"
import { useApiMutation } from "../../../hooks/use-api-mutation"

export const EmptyBoards = () => {
  const router = useRouter()
  const { organization } = useOrganization()
  const { mutate, pending } = useApiMutation(api.board.create)

  const onClick = () => {
    if (!organization) return
    mutate({
      orgId: organization.id,
      title: "Untitled"
    })
      .then((id) => {
        toast.success("Board created")
        router.push(`/board/${id}`)
      })
      .catch((err) => toast.error(err.message))
  }

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <Image 
        src='/note.svg'
        alt="Empty Boards"
        width={110}
        height={110}
      />

      <h2 className="text-2xl font-semibold mt-6">
        Create your first board
      </h2>

      <p className="text-sm text-muted-foreground mt-2">
        Start creating a board for your organization
      </p>

      <div className="mt-6">
        <Button 
          size={'lg'}
          disabled={pending}
          onClick={onClick}
        >
          Create board
        </Button>
      </div>
    </div>
  )
}
