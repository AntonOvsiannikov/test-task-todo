export interface TodoInterface {
	id: number | any;
	text: string;
	checked: boolean;
	toggle: (state: boolean) => void;
	newText: (newText: string) => void;
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
