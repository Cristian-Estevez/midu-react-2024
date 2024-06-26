const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// async await
export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}

/*
regular code =
export function getRandomFact () {
  fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res =>
      res.json()
    )
    .then(data => {
      const { fact } = data
      return fact
    })
}
*/
