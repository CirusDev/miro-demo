"use client"

import { LucideIcon } from "lucide-react"

import { Hint } from "@/components/hint"
import { Button } from "@/components/ui/button"

interface Props {
  label:        string
  icon:         LucideIcon  
  onClick:      () => void
  isActive?:    boolean
  isDisabled?:  boolean
}

import React from 'react'

export const ToolButton = ({ label, icon: Icon, onClick, isActive, isDisabled }: Props) => {
  return (
    <Hint label={label} side="right" sideOffset={12}>
      <Button
        variant={isActive ? "boardActive" : "board"}
        size={"icon"}
        disabled={isDisabled}
        onClick={onClick}      
      >
        <Icon />
      </Button>
    </Hint>
  )
}
