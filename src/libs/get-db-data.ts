import { createDBRequest } from '.'
import { getLocalStorageDBIndex } from '@/utils'

/**
 * Retrieves data from an IndexedDB database for a specified table.
 *
 * @param {string} tableName - The name of the object store in the database.
 * @returns {any} - The retrieved data from the specified table.
 */
export default function getDBData(tableName: string) {
  let data
  const currentDBIndex = getLocalStorageDBIndex(true)
  const request = createDBRequest(currentDBIndex, tableName)

  request.onsuccess = () => {
    const db = request.result
    const transaction = db.transaction('cars', 'readonly')
    const store = transaction.objectStore('cars')

    const allDataQuery = store.getAll()

    allDataQuery.onsuccess = () => {
      data = allDataQuery.result
    }

    transaction.oncomplete = () => db.close()
  }

  return data
}
