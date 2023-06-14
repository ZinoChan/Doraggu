import TaskList from "../TodoList"
import InProgress from '../InProgress'
import Done from '../Done'
import { useContext } from "react"
import { TodoContext } from "../../context"
import { hasDone, hasInProgress } from '../../helpers'
import { toast } from "react-hot-toast"

const DropZone = () => {
  const { todos, setTodos } = useContext(TodoContext)
  const handleSave = () => {
    const updatedTodos = todos.map(todo => {
      if (todo.status === 'inProgress') {
        return { ...todo, status: 'done' }
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
    toast.success("🎉 Task saved successfully!")
  }
  const doneExists = hasDone(todos)
  const inProgressExists = hasInProgress(todos)
  return (
    <section>
      <div className="grid lg:grid-cols-3 gap-4">
        <TaskList />
        <div className="text-center self-center order-0 order-3 lg:col-span-1">
          <p className="text-gray1 mb-2">
            mark all in-progress tasks as done.
          </p>
          <button
            onClick={handleSave}
            disabled={!inProgressExists}
            className="py-2 px-4 rounded disabled:cursor-not-allowed text-white bg-primary1 hover:bg-pink-600">
            Save
          </button>
        </div>
        <InProgress />
      </div>
      {doneExists &&

        <Done />
      }
    </section>
  )
}

export default DropZone
