import { Todo } from '../../context'
import React from 'react';
import DeleteBtn from '../Shared/DeleteBtn'

type ProgressCardProps = {
	todo: Todo;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ todo }) => {
	return (
		<>
			<div className="flex justify-between items-center">
				<h4 className="font-bold text-lg capitalize">
					{todo.title}
				</h4>
				<div className="space-x-2">
					<DeleteBtn id={todo.id} />
				</div>
			</div>
			<div className="mt-2 uppercase">
				<span className="inline-block bg-yellow2 text-yellow1 font-bold py-1 px-2 rounded-full text-xs">
					{todo.priority}
				</span>
				<span className="inline-block bg-blue2 text-blue1 font-bold ml-2 py-1 px-2 rounded-full text-xs">
					{todo.category}
				</span>
			</div>
		</>
	);
};

export default ProgressCard;
