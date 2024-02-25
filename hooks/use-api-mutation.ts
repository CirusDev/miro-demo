import { useState } from "react"
import { useMutation } from "convex/react"

export const useApiMutation = (mutationFunction: any) => {
  const [pending, setPending] = useState(false)
  const apiMutation = useMutation(mutationFunction)

  const mutate = async (payload: any) => {
    setPending(true)
    return apiMutation(payload)
      .then((res) => { return res })
      .finally(() => setPending(false))
      .catch((err) => { throw err })
  }

  return { mutate, pending }
}