type ResultType = string | null | undefined

export default function getLocalStorage(
  key: string,
  value?: string
): ResultType {
  if (window) {
    if (!localStorage.getItem(key)) localStorage.setItem(key, '')

    if (!!value) localStorage.setItem(key, value)
  }

  return localStorage.getItem(key)
}
