import TaskCard from '../TaskCard'
import { GiBroom } from 'react-icons/gi';
import { TodoContext } from '../../context';
import { useContext } from 'react';
import EmptyTasksMessage from '../UI/EmptyTasks'
import { hasInProgress } from '../../helpers';
import useDragAndDrop from '../../hooks/useDropAndDrag'
import Drop from '../UI/Drop';
import { toast } from 'react-hot-toast';


const InProgress = () => {
	const { todos, setTodos } = useContext(TodoContext);

	const { drop, isOver } = useDragAndDrop(todos, setTodos, 'inProgress')

	const inProgressExists = hasInProgress(todos)
	const clearProgressTasks = () => {
		setTodos(prev => prev.filter(item => item.status !== 'inProgress'))
		toast.success("🧹 All tasks cleared!")
	}

	return (
		<div ref={drop} className='min-h-[300px] lg:col-span-1 max-h-[410px] overflow-y-auto custom-scrollbar'>
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-2xl font-bold capitalize">
					In Progress
				</h3>
				<button onClick={clearProgressTasks} className="rounded-full bg-primary2 hover:bg-teal-500 text-white w-8 h-8 flex items-center justify-center">
					<GiBroom className="w-6 h-6" />
				</button>

			</div>
			<div className='relative min-h-[200px] max-h-[410px] overflow-y-auto custom-scrollbar px-2' style={{ backgroundColor: isOver ? '#F5E7E7' : '' }}>
				{!inProgressExists && <EmptyTasksMessage msg="start dragging tasks" />}
				{todos.filter(todo => todo.status === 'inProgress').map((todo) => (
					<TaskCard key={todo.id} todo={todo} />
				))}
				<Drop isOver={isOver} />
			</div>
		</div>
	)
}

export default InProgress
