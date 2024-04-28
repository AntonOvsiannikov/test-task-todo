import Todo from '@/utils/Todo';
import { initialTodoList, commitTodoList } from '@/utils';
import { ActionInterface } from '@/types';
import { TodoInterface } from '@/types';

const defaultState = initialTodoList();

export const todoListReducer = (
	state = defaultState,
	action: ActionInterface
) => {
	let todoList = state.slice();
	switch (action.type) {
		case 'ADD_TODO_ITEM':
			todoList.push(new Todo(false, action.todoText, false));
			commitTodoList(todoList);
			return todoList;
		case 'DELETE_TODO_ITEM':
			todoList = todoList.filter(
				(todoItem: TodoInterface) => action.todoId !== todoItem.id
			);
			commitTodoList(todoList);
			return todoList;
		case 'EDIT_TODO_ITEM':
			todoList.map((todoItem: TodoInterface) =>
				todoItem.id === action.updateTodo.id ? action.updateTodo : todoItem
			);
			commitTodoList(todoList);
			return todoList;
		case 'CLEAR_ALL_TODO_ITEM_DONE':
			todoList = todoList.filter(({ checked }: TodoInterface) => !checked);
			commitTodoList(todoList);
			return todoList;
		case 'CHECK_ALL_TODO_ITEM':
			todoList.map((todoItem: TodoInterface) => {
				todoItem.checked = !action.allTrueState;
				return todoItem;
			});
			commitTodoList(todoList);
			return todoList;
		default:
			return state;
	}
};
