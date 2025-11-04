import React, { useCallback } from 'react'
import { useFetch } from '../hooks/useFetch.js'

export function DataViewer({ url }) {
  const mapPosts = useCallback(
    (json) => (Array.isArray(json) ? json.slice(0, 5) : json),
    []
  )

  const { data, loading, error } = useFetch(url, { map: mapPosts })

  if (loading) return <p>Loading data...</p>
  if (error) return <p>Failed to load: {String(error.message || error)}</p>

  return (
    <div>
      <h3>Data:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
