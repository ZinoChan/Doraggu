import { useContext } from 'react';
import { TodoContext } from '../../context';
import TaskCard from '../TaskCard';
import { FiPlus } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import Drop from '../UI/Drop'
import { hasTodo } from '../../helpers';
import EmptyTasksMessage from '../UI/EmptyTasks'
import useDragAndDrop from '../../hooks/useDropAndDrag'

const TaskList = () => {
	const { todos, setTodos } = useContext(TodoContext);

	const handleAddTodo = () => {
		const newTodo = {
			id: uuidv4(),
			title: '',
			priority: '',
			category: '',
			status: 'todo'
		};
		setTodos([...todos, newTodo]);
	};

	const { drop, isOver } = useDragAndDrop(todos, setTodos, 'todo')
	const todosExist = hasTodo(todos)
	return (
		<div ref={drop} className='min-h-[300px] lg:col-span-1'>
			<div className="flex items-center justify-between mb-4 ">
				<h3 className="text-2xl font-bold capitalize">Todo List</h3>
				<button
					className="rounded-full bg-primary2 hover:bg-teal-600 text-white w-8 h-8 flex items-center justify-center"
					onClick={handleAddTodo}
				>
					<FiPlus className="w-6 h-6" />
				</button>
			</div>
			<div className='relative min-h-[40px] max-h-[410px] overflow-y-auto custom-scrollbar px-2' style={{ backgroundColor: isOver ? '#F5E7E7' : '' }}>
				{!todosExist && <EmptyTasksMessage />}
				{todos.filter(todo => todo.status === 'todo').map((todo) => (
					<TaskCard key={todo.id} todo={todo} />
				))}
				<Drop isOver={isOver} />
			</div>
		</div>
	);
};

export default TaskList;

