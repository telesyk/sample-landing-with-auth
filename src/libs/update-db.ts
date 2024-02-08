import { createDBRequest } from '.'
import { getLocalStorageDBIndex } from '@/utils'
import { INDEXED_DB } from '@/constants'

/**
 * Updates an IndexedDB database with the provided state for a given table.
 *
 * @param {any} state - The state object to be stored in the database.
 * @param {string} tableName - The name of the object store in the database.
 */
export default function updateDB(state: any, tableName: string) {
  const newDBIndex = getLocalStorageDBIndex()
  localStorage.setItem('db_index', newDBIndex.toString())

  const request = createDBRequest(newDBIndex, tableName)

  request.onsuccess = () => {
    const db = request.result
    const transaction = db.transaction(tableName, 'readwrite')
    const store = transaction.objectStore(tableName)

    store.put({
      [INDEXED_DB.topKey.session]: state.session,
      [INDEXED_DB.topKey.local]: state.local,
    })

    transaction.oncomplete = () => db.close()
  }
}
