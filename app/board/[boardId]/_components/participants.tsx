"use client"

import { useOthers, useSelf } from "@/liveblocks.config"

import { UserAvatar } from "./user-avatar"
import { connectionIdToColor } from "@/lib/utils"

const MAX_SHOWN_USERS = 2

export const Participants = () => {
  const users = useOthers()
  const currentUser = useSelf()
  const hasMoreUsers = users.length > MAX_SHOWN_USERS

  return (
    <div
      className='absolute flex h-12 top-2 right-2 bg-white rounded-md p-2 items-center shadow-md'
    >
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOWN_USERS).map(({ connectionId, info}) => {
          return (
            <div key={connectionId} className="shadow-lg rounded-full">
              <UserAvatar                
                src={info?.picture}
                name={info?.name}
                fallback={info?.name?.slice(1) || "X" }
                borderColor={connectionIdToColor(connectionId)}
                />
            </div>
          )
        })}

        {currentUser && (
          <div className="shadow-lg rounded-full">
            <UserAvatar 
              src={currentUser.info?.picture}
              name={`${currentUser.info?.name} (You)`}
              fallback={currentUser.info?.name?.[1]}
              borderColor={connectionIdToColor(currentUser.connectionId)}
            />
          </div>
        )}

        {hasMoreUsers && (
          <UserAvatar 
            name={`${users.length - MAX_SHOWN_USERS} more`}
            fallback={`+${users.length - MAX_SHOWN_USERS}`}
          />
        )}
      </div>
    </div>
  )
}

export const ParticipantsSkeleton = () => {
  return (
    <div 
      className='absolute flex h-12 top-2 right-2 bg-white rounded-md p-3 items-center shadow-md w-[100px]'
    />
  )
}