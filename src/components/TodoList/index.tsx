import TodoItem from '@/components/TodoItem';
import { useSelector } from 'react-redux';
import { filteredTodolistSelector } from '@/store/selector';
import { TodoInterface } from '@/types';
import styles from './styles.module.scss';

const TodoList = () => {
	const todoList: TodoInterface[] = useSelector(filteredTodolistSelector);

	return (
		<ul className={styles['todo-list']}>
			{todoList.map((todoItem) => (
				<TodoItem todo={todoItem} key={todoItem.id} />
			))}
		</ul>
	);
};

export default TodoList;
