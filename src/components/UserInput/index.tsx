import { KeyboardEvent, SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '@/store/action/todoListAction';
import styles from './styles.module.scss';

const UserInput = () => {
	const [inputValue, setInputValue] = useState<string>('');
	const dispatch = useDispatch();

	const addTodoItem = (
		e: SyntheticEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>
	) => {
		if (
			inputValue.length !== 0 &&
			(e.type === 'blur' ||
				(e as KeyboardEvent<HTMLInputElement>).key === 'Enter')
		) {
			e.preventDefault();
			dispatch(addTodoAction(inputValue));
			setInputValue('');
		}
	};
	return (
		<input
			onBlur={addTodoItem}
			onKeyDown={addTodoItem}
			onChange={(e) => setInputValue(e.target.value)}
			value={inputValue}
			className={styles['new-todo']}
			placeholder="What needs to be done?"
			autoFocus
		/>
	);
};

export default UserInput;
