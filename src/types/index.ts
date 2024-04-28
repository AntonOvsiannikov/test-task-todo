export interface TodoInterface {
	id: number;
	text: string;
	checked: boolean;
}
export interface ActionInterface {
	type: string;
	payload: string | TodoInterface;
}
export interface FilteredTodolistInterface {
	todoList: TodoInterface[];
	filter: string;
}
export interface RoutInterface {
	filterValue: string;
	hashValue: string;
}
