export type LocalStorageKey = 'loginUser'

export class LocalStorage {
  set<T>(key: LocalStorageKey, value: T): void {
    try {
      const json = JSON.stringify(value)
      localStorage.setItem(key, json)
    } catch (error) {
      console.error(`LocalStorage.set error:`, error)
    }
  }

  get<T>(key: LocalStorageKey): T | null {
    try {
      const json = localStorage.getItem(key)
      return json ? (JSON.parse(json) as T) : null
    } catch (error) {
      console.error(`LocalStorage.get error:`, error)
      return null
    }
  }

  remove(key: LocalStorageKey): void {
    localStorage.removeItem(key)
  }

  clear(): void {
    localStorage.clear()
  }
}
