import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/'

export function useCatImage({ fact }) {
  const [photo, setPhoto] = useState()

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((reponse) => {
        const { _id } = reponse
        setPhoto(`${CAT_PREFIX_IMAGE_URL}${_id}`)
      })
  }, [fact])

  return { photo }
}
