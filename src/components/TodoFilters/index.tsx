import FilterNavBar from '@/components/FilterNavBar';
import styles from './styles.module.scss';
import { navListValue } from '@/constants';
import { RoutInterface } from '@/types';

const TodoFilters = () => {
	return (
		<ul className={styles['filters']}>
			{navListValue.map((navItem: RoutInterface, index: number) => (
				<FilterNavBar key={index} hashValue={navItem.hashValue}>
					{navItem.filterValue}
				</FilterNavBar>
			))}
		</ul>
	);
};

export default TodoFilters;
