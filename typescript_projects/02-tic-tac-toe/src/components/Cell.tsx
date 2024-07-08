import { type Cell } from '../constants/cells'
import { TURNS } from '../constants/winner'

type Props = {
  cell: Cell
  onClick: (position: number) => void
  key: React.Key | null | undefined
}

const getMark = (claimed: string | null): string | null => {
  if (claimed === null) return null
  return claimed === 'cross' ? TURNS.x : TURNS.o
}

const Cell: React.FC<Props> = (props) => {
  const { claimed, position } = { ...props.cell }
  const mark = getMark(claimed)

  const handleClick = () => {
    props.onClick(position)
  }

  return (
    <div className="cell" onClick={handleClick}>
      {mark}
    </div>
  )
}

export default Cell
