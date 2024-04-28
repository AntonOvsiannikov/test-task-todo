import TodoFilter from '@/components/TodoFilters';
import { useDispatch } from 'react-redux';
import { clearAllTodoDoneAction } from '@/store/action/todoListAction';
import { TodoInterface } from '@/types';
import { FC, MouseEvent } from 'react';
import styles from './styles.module.scss';

export interface FooterAppProps {
	todoList: TodoInterface[];
}

const FooterApp: FC<FooterAppProps> = ({ todoList }) => {
	const dispatch = useDispatch();

	const todoNotDoneCount = () => {
		const count = todoList.filter(
			({ checked }: TodoInterface) => !checked
		).length;
		return count;
	};
	const todoDoneCount = () => {
		const count = todoList.filter(
			({ checked }: TodoInterface) => checked
		).length;
		return count > 0;
	};
	const deleteAllDone = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(clearAllTodoDoneAction());
	};
	return (
		<footer className={styles['footer']}>
			<span className={styles['todo-count']}>
				{todoNotDoneCount()} items left
			</span>
			<TodoFilter />
			<button
				className={`${styles['clear-completed']} ${todoDoneCount() ? '' : styles.hidden}`}
				onClick={deleteAllDone}
			>
				Clear completed
			</button>
		</footer>
	);
};

export default FooterApp;
