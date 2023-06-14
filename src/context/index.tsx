import React, { createContext, useState, ReactNode } from 'react';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
	id: string;
	title: string;
	priority: string;
	category: string;
	status: string;
}
type TodoContextType = {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	deleteTask: (id: string) => void
};

const initialContext: TodoContextType = {
	todos: [
		{
			id: uuidv4(),
			title: '',
			priority: '',
			category: '',
			status: 'todo'
		}
	],
	setTodos: () => { },
	deleteTask: () => { }
};

export const TodoContext = createContext<TodoContextType>(initialContext);

interface TodoProviderProps {
	children: ReactNode;

}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const deleteTask = (id: string) => {
		setTodos(prev => prev.filter(todo => todo.id !== id));
		toast.success("Task Deleted")
	}

	return (
		<TodoContext.Provider value={{ todos, setTodos, deleteTask }}>
			{children}
		</TodoContext.Provider>
	);
};
