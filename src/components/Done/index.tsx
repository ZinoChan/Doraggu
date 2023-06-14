import { useContext } from "react";
import { TodoContext } from "../../context";
import DeleteBtn from "../Shared/DeleteBtn";



const Table: React.FC = () => {
	const { todos } = useContext(TodoContext)
	return (
		<div className="my-6">
			<h3 className="text-2xl font-bold capitalize">Done</h3>
			<div className="overflow-x-auto">
				<table className="w-full text-sm text-left rounded shadow">
					<thead className="text-xs text-gray-700 uppercase bg-light">
						<tr>
							<th scope="col" className="px-6 py-3">
								Id
							</th>
							<th scope="col" className="px-6 py-3">
								Title
							</th>
							<th scope="col" className="px-6 py-3">
								Category
							</th>
							<th scope="col" className="px-6 py-3">
								Priority
							</th>
							<th scope="col" className="px-6 py-3">
								Del
							</th>
						</tr>
					</thead>
					<tbody>
						{todos
							.filter(todo => {
								return todo.status === 'done';
							})
							.map(todo => (
								<tr className="bg-white border-b" key={todo.id}>
									<th scope="row" className="px-6 py-4 whitespace-nowrap">
										{`${todo.id.slice(0, 8)}...`}
									</th>
									<td className="px-6 py-4">{todo.title}</td>
									<td className="px-6 py-4">{todo.category}</td>
									<td className="px-6 py-4">{todo.priority}</td>
									<td className="px-6 py-4">
										<DeleteBtn id={todo.id} />
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;

