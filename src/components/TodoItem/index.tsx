import { FC, KeyboardEvent, MouseEvent, SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	deleteTodoAction,
	editTodoAction,
} from '@/store/action/todoListAction';
import { TodoInterface } from '@/types';
import styles from './styles.module.scss';

export interface TodoItemProps {
	todo: TodoInterface;
}
const TodoItem: FC<TodoItemProps> = ({ todo }) => {
	const [editInputState, setEditInputState] = useState(false);
	const [editInputValue, setEditInputValue] = useState(todo.text);

	const dispatch = useDispatch();
	const createInputField = () => {
		setEditInputState(true);
	};
	const deleteTodoItem = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(deleteTodoAction(todo.id));
	};
	const toggleTodoItem = () => {
		todo.toggle(!todo.checked);
		dispatch(editTodoAction(todo));
	};
	const editTodoItem = (
		e: SyntheticEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>
	) => {
		if (
			e.type === 'blur' ||
			(e as KeyboardEvent<HTMLInputElement>).key === 'Enter'
		) {
			helperEditFunction(e);
		}
	};
	const helperEditFunction = (
		e: SyntheticEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>
	) => {
		if (editInputValue) {
			e.preventDefault();
			updateTextTodoItem(editInputValue);
			setEditInputState(false);
		} else {
			dispatch(deleteTodoAction(todo.id));
		}
	};
	const updateTextTodoItem = (inputTextTodo: string) => {
		todo.newText(inputTextTodo);
		dispatch(editTodoAction(todo));
	};
	return (
		<li
			data-id={todo.id}
			className={`${styles.todo} ${todo.checked ? styles['completed'] : ''} ${editInputState ? styles['editing'] : ''}`}
		>
			<div className={styles['view']}>
				<input
					className={styles['toggle']}
					type="checkbox"
					checked={todo.checked}
					onChange={toggleTodoItem}
				/>
				<label onDoubleClick={createInputField}>{todo.text}</label>
				<button className={styles['destroy']} onClick={deleteTodoItem}></button>
			</div>
			{editInputState ? (
				<input
					value={editInputValue}
					onChange={(e) => setEditInputValue(e.target.value)}
					onBlur={editTodoItem}
					onKeyDown={editTodoItem}
					className={styles['edit']}
					autoFocus
				/>
			) : null}
		</li>
	);
};
export default TodoItem;
