import { useDispatch, useSelector } from 'react-redux';
import { filterSelector } from '@/store/selector';
import { changeFilterAction } from '@/store/action/filterActions.ts';
import { FC, ReactNode } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

export interface FilterNavBarProps {
	children: ReactNode;
	hashValue: string;
}

const FilterNavBar: FC<FilterNavBarProps> = ({ children, hashValue }) => {
	const dispatch = useDispatch();
	const filterValue = useSelector(filterSelector);

	const changeFilter = (filter: string) => {
		window.location.hash = filter;
		dispatch(changeFilterAction(filter));
	};
	return (
		<li className={styles['filters-item']}>
			<Link
				to={hashValue}
				className={filterValue === hashValue ? styles.selected : ''}
				onClick={() => changeFilter(hashValue)}
			>
				{children}
			</Link>
		</li>
	);
};

export default FilterNavBar;
