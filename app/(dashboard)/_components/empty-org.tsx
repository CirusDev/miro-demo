import Image from "next/image"
import { CreateOrganization } from "@clerk/nextjs"

import { Button } from "../../../components/ui/button"
import { Dialog, DialogTrigger, DialogContent } from "../../../components/ui/dialog"

export const EmptyOrg = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <Image 
        src={"/elements.svg"}
        alt="Empty Organization"
        height={200}
        width={200}
      />

      <h2 className="text-2xl font-semibold mt-6">
        Bienvenu au Board
      </h2>

      <p className="text-sm text-muted-foreground mt-2">
        Créez un nouveau board pour commencer à gérer vos projets.
      </p>

      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size={'lg'}>
              Créez votre Organization            
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>

      </div>
    </div>
  )
}
