import { useState } from 'react'

export default function useTurn() {
  const [turn, setTurn] = useState('cross')

  const changeTurn = () => {
    if (turn === 'cross') {
      setTurn('circle')
    } else {
      setTurn('cross')
    }
  }

  const resetTurns = () => {
    setTurn('cross')
  }

  return { turn, changeTurn, resetTurns }
}
