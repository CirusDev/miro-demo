import Image from "next/image"

export const EmptySearch = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <Image 
        src='/empty-search.svg'
        alt="Empty Search"
        width={140}
        height={140}
      />

      <h2 className="text-2xl font-semibold mt-6">
        No results found
      </h2>

      <p className="text-sm text-muted-foreground mt-2">
        Try search something else
      </p>
    </div>
  )
}
