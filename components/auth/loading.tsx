import Image from "next/image"

import React from 'react'

export const Loading = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <Image 
        src={"/logo.svg"}
        alt="logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
      
    </div>
  )
}
