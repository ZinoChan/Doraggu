import React, { useContext } from "react";
import { TodoContext } from "../../context";
import { FiTrash } from 'react-icons/fi';

type DeleteButtonProps = {
	id: string;
}

const DeleteBtn: React.FC<DeleteButtonProps> = ({ id }) => {
	const { deleteTask } = useContext(TodoContext);

	return (
		<button className="ml-auto" onClick={() => deleteTask(id)}>
			<FiTrash className="inline-block text-gray-500 cursor-pointer hover:text-red-600" />
		</button>
	)
}

export default DeleteBtn;
