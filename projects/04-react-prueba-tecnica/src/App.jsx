import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export default function App() {
  const { fact, refreshFact } = useCatFact()
  const { photo } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {photo && (
          <img
            src={photo}
            alt={`Image extracted using the first word from ${fact}`}
          />
        )}
      </section>
    </main>
  )
}
