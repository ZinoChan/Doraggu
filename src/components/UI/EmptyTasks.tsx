
function EmptyTasksMessage({ msg = "Start adding some tasks" }) {
	return (
		<div className="h-full">
			<div className="border border-dashed border-gray-300 rounded-lg p-4">
				<p className="text-gray-500 text-center capitalize">
					{msg}
				</p>
			</div>
		</div>
	);
}

export default EmptyTasksMessage;
