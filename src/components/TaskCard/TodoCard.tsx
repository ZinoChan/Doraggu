import React, { useContext, useEffect, useState } from "react";
import { Todo, TodoContext } from "../../context";
import DeleteBtn from "../Shared/DeleteBtn";
import UpgradeStatus from '../UI/UpgradeStatus'


type TodoCardProps = {
	todo: Todo;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {
	const { setTodos } = useContext(TodoContext);
	const [formData, setFormData] = useState(todo);

	useEffect(() => {
		setFormData(todo)
	}, [todo])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleBlur = () => {
		setTodos(prev => prev.map(item => item.id == todo.id ? formData : item))
	}

	return (
		<>
			<span className="flex mb-2 space-x-2 relative">
				<DeleteBtn id={todo.id} />
				<span className="lg:hidden flex">
					<UpgradeStatus todo={todo} />
				</span>
			</span>
			<input
				name="title"
				type="text"
				className="w-full p-2 rounded border border-light"
				placeholder="Task title"
				value={formData.title}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<select
				name="priority"
				className="w-full p-2 rounded border border-light mt-2"
				value={formData.priority || ""}
				onChange={handleChange}
				onBlur={handleBlur}
			>
				<option value="">Set Priority</option>
				<option value="low">Low</option>
				<option value="medium">Medium</option>
				<option value="high">High</option>
			</select>
			<select
				name="category"
				className="w-full p-2 rounded border border-light mt-2"
				value={formData.category || ""}
				onChange={handleChange}
				onBlur={handleBlur}
			>
				<option value="">Set Category</option>
				<option value="ui">UI</option>
				<option value="ux">UX</option>
				<option value="feature">Feature</option>
			</select>
		</>
	);
};

export default TodoCard;
