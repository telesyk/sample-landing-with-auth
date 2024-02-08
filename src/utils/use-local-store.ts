type ResultType = string

export default function useLocalStore(key: string, value?: string): ResultType {
  let store = <ResultType>''

  if (window) {
    if (!localStorage.getItem(key)) localStorage.setItem(key, '')

    if (!value) {
      store = localStorage.getItem(key) || ''
    } else {
      localStorage.setItem(key, value)
      store = localStorage.getItem(key) || ''
    }
  }

  return store
}
