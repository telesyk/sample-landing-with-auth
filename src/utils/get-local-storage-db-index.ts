export default function getLocalStorageDBIndex(isCurrentIndex = false): number {
  if (!window) throw Error('Error: object "window" is not available!')

  if (!localStorage.getItem('db_index')) localStorage.setItem('db_index', '1')

  const dbIndex = Number(localStorage.getItem('db_index'))

  if (isCurrentIndex) return dbIndex

  return dbIndex + 1
}
