"use client"

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"
import { Link2, Pencil, Trash } from "lucide-react"
import { toast } from "sonner"

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"  
import { useApiMutation } from "../hooks/use-api-mutation"
import { api } from "../convex/_generated/api"
import { ConfirmModal } from "./confirm-modal"
import { Button } from "./ui/button"
import { useRenameModal } from "../store/use-rename-modal"

interface Props {
  children:     React.ReactNode
  side?:        DropdownMenuContentProps["side"]
  sideOffset?:  DropdownMenuContentProps["sideOffset"]
  id:           string
  title:        string
}

export const Actions = ({ children, side, sideOffset, id, title }: Props) => {
  const { onOpen } = useRenameModal()
  const { mutate, pending } = useApiMutation(api.board.remove)

  const onCopyLink = () => {
    navigator.clipboard.writeText(`
      ${window.location.origin}/board/${id}
    `)
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Failed to copy link"))
  }

  const onDelete = () => {
    mutate({ id })
      .then(() => toast.success(`Board ${title} deleted`))
      .catch(() => toast.error("Failed to delete board"))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-52"
        side={side}
        sideOffset={sideOffset}
        onClick={(e) => e.stopPropagation()}
      >
        <DropdownMenuItem 
          className="p-2 cursor-pointer"
          onClick={onCopyLink}
        >
          <Link2 className="h-4 w-4 mr-2" />

          Copy board link
        </DropdownMenuItem>

        <DropdownMenuItem 
          className="p-2 cursor-pointer"
          onClick={() => onOpen(id, title)}
        >
          <Pencil className="h-4 w-4 mr-2" />

          Rename
        </DropdownMenuItem>
        
        <ConfirmModal
          header="Delete board ?"
          description="This action cannot be undone"
          disabled={pending}
          onConfirm={onDelete}
        >
          <Button
            variant={"ghost"}
            className="text-sm p-2 cursor-pointer w-full justify-start font-normal"
          >
            <Trash className="h-4 w-4 mr-2" />

            Delete
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}