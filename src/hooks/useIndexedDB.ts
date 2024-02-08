import { useState, useEffect } from 'react'
import { getDBData, updateDB } from '@/libs'

type UpdatesProps = {
  session: {
    name?: string | null | undefined
    email?: string | null | undefined
    image?: string | null | undefined
  }
  local: {}
}
export default function useIndexedDB(
  dbTableName: string | null | undefined,
  updates?: UpdatesProps
) {
  const [state, setState] = useState<any>({ ...updates } || {})

  useEffect(() => {
    if (!dbTableName) return

    if (!updates) {
      const currentStore = getDBData(dbTableName)
      setState(currentStore)
    } else {
      updateDB(updates, dbTableName)
      const updatedStore = getDBData(dbTableName)
      setState(updatedStore)
    }
  }, [])

  return state
}
