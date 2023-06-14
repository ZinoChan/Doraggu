import { Todo } from '../context'

export const hasInProgress = (todos: Todo[]) => {
  return todos.some(todo => todo.status === 'inProgress');
}
export const hasDone = (todos: Todo[]) => {
  return todos.some(todo => todo.status === 'done');
}

export const hasTodo = (todos: Todo[]) => {
  return todos.some(todo => todo.status === 'todo');
}

export const isValidTodo = (todo: Todo): boolean => {
  return todo.title !== "" && todo.priority !== "" && todo.category !== "";
}
