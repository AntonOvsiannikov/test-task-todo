import { FilteredTodolistInterface, TodoInterface } from '@/types';

export const todoSelector = (state: FilteredTodolistInterface) =>
	state.todoList;
export const filterSelector = (state: FilteredTodolistInterface) =>
	state.filter;
export const filteredTodolistSelector = (state: FilteredTodolistInterface) => {
	switch (state.filter) {
		case '/completed':
			return state.todoList.filter(({ checked }: TodoInterface) => checked);
		case '/active':
			return state.todoList.filter(({ checked }: TodoInterface) => !checked);
		default:
			return state.todoList;
	}
};

export const stateSelector = (state: FilteredTodolistInterface) => state;
