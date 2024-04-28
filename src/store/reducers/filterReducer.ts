import { ActionInterface } from '@/types';

const defaultState = window.location.pathname || '/';

export const filterReducer = (
	state = defaultState,
	action: ActionInterface
) => {
	switch (action.type) {
		case 'SET_FILTER':
			return action.payload;
		default:
			return state;
	}
};
