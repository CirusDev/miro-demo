import { Room } from "../../../components/room"
import { Canvas } from './_components/canvas'
import { Loading } from "./_components/loading"

interface Props {
  params: {
    boardId: string
  }
}

const BoardIdPage = ({ params }: Props) => {
  return (    
    <Room
      roomId={params.boardId}
      fallback={<Loading />}
    >
      <Canvas boardId={params.boardId} />
    </Room>
  )
}

export default BoardIdPage