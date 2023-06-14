
const Drop = ({ isOver }: { isOver: boolean }) => {
	return (
		<>
			{
				isOver && <div
					className="h-full absolute z-0 top-0 bottom-0 left-0 w-full flex flex-col space-y-3 items-center justify-center bg-red-100 py-4"
					style={{ backgroundColor: isOver ? '#FFF4F4' : '' }}
				>
					<span className='text-gray1'>
						Drop here
					</span>
				</div>
			}
		</>
	)
}

export default Drop




