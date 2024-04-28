import { useDispatch, useSelector } from 'react-redux';
import { todoSelector } from '@/store/selector';
import { isAllTrueTodo } from '@/utils';
import { checkAllTodoAction } from '@/store/action/todoListAction';
import UserInput from '@/components/UserInput';
import TodoList from '@/components/TodoList';
import FooterApp from '@/components/FooterApp';
import { TodoInterface } from '@/types';
import styles from './App.module.scss';

function App() {
	const dispatch = useDispatch();
	const todoList: TodoInterface[] = useSelector(todoSelector);

	const checkAllTodo = () => {
		const allTrueTodoState = isAllTrueTodo(todoList);
		dispatch(checkAllTodoAction(allTrueTodoState));
	};

	return (
		<div className="App">
			<section className={styles.todoapp} id="todoapp1">
				<header>
					<h1>todos</h1>
					<UserInput />
				</header>
				<section className={styles.main}>
					<input
						id="toggle-all"
						checked={isAllTrueTodo(todoList)}
						onClick={checkAllTodo}
						className={styles['toggle-all']}
						type="checkbox"
					/>
					<label htmlFor="toggle-all">Mark all as complete</label>
					<TodoList />
				</section>
				{todoList.length > 0 ? <FooterApp todoList={todoList} /> : null}
			</section>
		</div>
	);
}

export default App;
