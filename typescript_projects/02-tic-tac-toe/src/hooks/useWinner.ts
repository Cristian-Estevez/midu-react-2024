import { useState } from 'react'

import { Winner } from '../constants/winner'
import { BoardType } from '../constants/cells'
import { WINNER_COMBOS } from '../constants/constants'

export default function useWinner() {
  const [winner, setWinner] = useState<Winner>(null)

  const checkWinnerFrom = (boardToCheck: BoardType) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a].claimed &&
        boardToCheck[a].claimed === boardToCheck[b].claimed &&
        boardToCheck[a].claimed === boardToCheck[c].claimed
      ) {
        return boardToCheck[a].claimed as Winner
      }
    }
    return null
  }

  const checkEndGame = (boardToCheck: BoardType) => {
    return boardToCheck.every((cell) => cell.claimed !== null)
  }

  const claimWinner = (newWinner: Winner) => {
    setWinner(newWinner)
  }

  const resetWinner = () => {
    setWinner(null)
  }

  return { checkWinnerFrom, checkEndGame, winner, claimWinner, resetWinner }
}
