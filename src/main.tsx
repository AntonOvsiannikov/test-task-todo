import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './styles/global.scss';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
