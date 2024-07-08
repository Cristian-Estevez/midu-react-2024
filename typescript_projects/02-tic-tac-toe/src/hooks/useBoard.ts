import { useState } from 'react'

import useTurn from './useTurn'
import { Cell as CellType, initialBoard } from '../constants/cells'
import useWinner from './useWinner'

export default function useBoard() {
  const [finished, setFinished] = useState<boolean>(false)
  const [board, setBoard] = useState<CellType[]>(initialBoard)
  const { winner, checkEndGame, checkWinnerFrom, claimWinner, resetWinner } =
    useWinner()
  const { turn, changeTurn, resetTurns } = useTurn()

  const claimCell = (position: number) => {
    if (board[position].claimed != null || winner || finished) return

    const newBoard = [...board]
    newBoard[position].claimed = turn
    setBoard(newBoard)
    changeTurn()

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      claimWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      gameFinished()
    }
  }

  const gameFinished = () => {
    setFinished(true)
  }

  const restartGame = () => {
    setBoard((prevState) => {
      return prevState.map((cell) => {
        return { ...cell, claimed: null }
      })
    })
    resetWinner()
    resetTurns()
    setFinished(false)
  }

  return { board, restartGame, claimCell, winner, finished }
}
