import { TodoInterface } from '@/types';

class Todo implements TodoInterface {
	id: number;
	text: string;
	checked: boolean;

	constructor(id: number, text: string, checked: boolean) {
		this.id = id || new Date().valueOf();
		this.text = text;
		this.checked = checked || false;
	}
	toggle(state: boolean): void {
		this.checked = state;
	}
	newText(newText: string): void {
		this.text = newText !== this.text ? newText : this.text;
	}
}
export default Todo;
