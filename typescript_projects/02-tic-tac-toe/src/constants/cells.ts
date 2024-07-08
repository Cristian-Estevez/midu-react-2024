export type Cell = {
  position: number
  claimed: null | string
}

export type BoardType = Cell[]

export const initialBoard: BoardType = [
  { position: 0, claimed: null },
  { position: 1, claimed: null },
  { position: 2, claimed: null },
  { position: 3, claimed: null },
  { position: 4, claimed: null },
  { position: 5, claimed: null },
  { position: 6, claimed: null },
  { position: 7, claimed: null },
  { position: 8, claimed: null }
]
