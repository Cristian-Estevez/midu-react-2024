import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  /**
   * Use memo previene que se ejecute un pedazo de código
   *  cuando vuelve a renderizarse un componente o hook
   *  No siempre debe usarse. Si la operación no es costosa no have falta
   *
   * Las dependencias que recibe como segundo parámetro,
   *  son las que gatillan la ejecución del callback del useMemo
   */

  /*
  const getMovies = useMemo(() => {
    return async ({ search }) => {
      if (search === previousSearch.current) return

      try {
        setLoading(true)
        setError(null)
        previousSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
  }, [])
  */

  /**
   * getMovies con useCallback en lugar de useMemo,
   * tanto useCallback como useMemo hacen lo mismo pero simplifcando la sintaxis
   * si se desea devolver una función
   *
   * (useCallback utiliza por debajo al useMemo)
   */
  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])

  return { movies: sortedMovies, getMovies, error, loading }
}
