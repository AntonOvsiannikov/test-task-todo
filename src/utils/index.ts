import Todo from './Todo';
import { TodoInterface } from '@/types';

export const isAllTrueTodo = (todoList: TodoInterface[]) => {
	const state = todoList.filter(
		(todo: TodoInterface) => todo.checked === true
	).length;
	return state === todoList.length && todoList.length > 0;
};
export const commitTodoList = (todoList: TodoInterface[]) => {
	localStorage.setItem('todoapp', JSON.stringify(todoList));
};
export const initialTodoList = () => {
	const initTodoList: TodoInterface[] = JSON.parse(
		localStorage.getItem('todoapp') || '[]'
	);

	return initTodoList.map(
		(todoItem: TodoInterface) =>
			new Todo(todoItem.id, todoItem.text, todoItem.checked)
	);
};
