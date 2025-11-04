import { useEffect, useRef, useState } from 'react'

// Stable version: only re-fetches when URL changes, avoids flicker
export function useFetch(url, { map = (x) => x } = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // keep latest map function without retriggering effect
  const mapRef = useRef(map)
  useEffect(() => {
    mapRef.current = map
  }, [map])

  useEffect(() => {
    if (!url) return
    let cancelled = false

    setLoading(true)
    setError(null)

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((json) => {
        if (!cancelled) setData(mapRef.current(json))
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [url])

  return { data, loading, error }
}
