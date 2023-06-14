import React, { useContext, useState } from 'react';
import { Todo, TodoContext } from "../../context";
import { BsThreeDots } from 'react-icons/bs'
import { isValidTodo } from '../../helpers';
import { toast } from 'react-hot-toast';


interface UpgradeStatusProps {
  todo: Todo;
}

const UpgradeStatus: React.FC<UpgradeStatusProps> = ({ todo }) => {
  const { setTodos } = useContext(TodoContext);

  const handleStatusChange = () => {
    if (isValidTodo(todo)) {
      setTodos(prev => prev.map(item => {
        if (item.id === todo.id) {
          return { ...item, status: 'inProgress' };
        }
        return item;
      }));
    } else {
      toast.error('Please fill in all fields before moving the task.');
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100"
        type="button"
        onClick={toggleDropdown}
      >
        <BsThreeDots className="w-4 h-4" />
      </button>

      {isOpen && (
        <button
          onClick={handleStatusChange}
          className="z-10 bg-light focus:bg-gray-200 divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-full right-0"
        >
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <span className="block px-4 py-2">
                in progress
              </span>
            </li>
          </ul>
        </button>
      )}
    </>

  );
};

export default UpgradeStatus;

