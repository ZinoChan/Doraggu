import { useDrag } from 'react-dnd'
import { Todo } from '../../context';
import TodoCard from './TodoCard'
import ProgressCard from './ProgressCard'
import React from 'react';

type TaskCardProps = {
	todo: Todo;
}

const TaskCard: React.FC<TaskCardProps> = ({ todo }) => {


	const [{ isDragging }, drag] = useDrag(() => ({
		type: "task",
		item: todo,
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}))
	return (
		<div ref={drag} style={{ cursor: isDragging ? 'grabbing' : 'grab' }} className="bg-white shadow rounded p-4 my-2">
			{todo.status == 'todo' ? <TodoCard todo={todo} /> : <ProgressCard todo={todo} />}
		</div>

	)
}

export default TaskCard
