import { List } from "./list"
import { NewButton } from "./new-button"

const Sidebar = () => {
  return (
    <aside className="fixed flex flex-col z-10 left-0 h-full w-16 p-3 gap-y-4 bg-blue-950 text-white">
      <List />
      
      <NewButton />
    </aside>
  )
}

export default Sidebar