import { useRef, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { toast } from 'react-hot-toast';
import { Todo } from '../context'
import { isValidTodo } from '../helpers';

function useDropAndDrag(todos: Todo[], setTodos: any, status: string) {
	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'task',
		drop: (item: Todo) => moveTask(item, status),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	const todosRef = useRef(todos);

	useEffect(() => {
		todosRef.current = todos;
	}, [todos]);

	const moveTask = (todo: Todo, status: string) => {
		const currentTask = todosRef.current.find(t => t.id === todo.id);
		if (!currentTask || (currentTask && !isValidTodo(currentTask))) {
			toast.error('Please fill in all fields before moving the task.');
			return;
		}
		setTodos((prevTodos: Todo[]) => {
			return prevTodos.map((t) => {
				if (t.id === todo.id) {
					return { ...t, status };
				} else {
					return t;
				}
			});
		});
	};

	return { isOver, drop };
}

export default useDropAndDrag
