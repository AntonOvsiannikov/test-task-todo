import { todoListReducer } from './todoListReducer';
import { filterReducer } from './filterReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
	todoList: todoListReducer,
	filter: filterReducer,
});
