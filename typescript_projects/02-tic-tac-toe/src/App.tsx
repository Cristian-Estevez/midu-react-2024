import './App.css'
import Cell from './components/Cell'
import { Cell as CellType } from './constants/cells'
import useBoard from './hooks/useBoard'

function App() {
  const { board, claimCell, restartGame, winner, finished } = useBoard()

  return (
    <main>
      <h1>TA-TE-TI</h1>
      <section className="grid">
        {board.map((cell: CellType) => (
          <Cell key={cell.position} cell={cell} onClick={claimCell} />
        ))}
      </section>

      <p>{winner && <>THERES A WINNER</>}</p>
      <p>{finished && <>IT'S A TIE</>}</p>

      <footer className="footer">
        <button onClick={restartGame}>Reiniciar</button>
      </footer>
    </main>
  )
}

export default App
