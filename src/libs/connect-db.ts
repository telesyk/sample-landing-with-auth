import { INDEXED_DB } from '@/constants'

/**
 * Creates an IndexedDB request to open or upgrade a database.
 *
 * @param {number | undefined} dbVersion - The desired version of the database.
 * @param {string} tableName - The name of the object store in the database.
 * @returns {IDBOpenDBRequest} - The IndexedDB open request.
 */
export default function createDBRequest(
  dbVersion: number | undefined,
  tableName: string
): IDBOpenDBRequest {
  const request = indexedDB.open(INDEXED_DB.name, !dbVersion ? 1 : dbVersion)

  request.onerror = event => {
    console.error('Fail to open IndexedDB')
    console.error(event)
  }

  request.onupgradeneeded = () => {
    const db = request.result

    if (!db.objectStoreNames.contains(tableName)) {
      const store = db.createObjectStore(tableName, { autoIncrement: true })

      store.createIndex(
        INDEXED_DB.topKey.session,
        [INDEXED_DB.topKey.session],
        { unique: false }
      )
      store.createIndex(INDEXED_DB.topKey.local, [INDEXED_DB.topKey.local], {
        unique: false,
      })
    }
  }

  return request
}
