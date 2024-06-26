import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import App from '@/App';

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="/active" element={<App />} />
			<Route path="/completed" element={<App />} />
		</Route>
	)
);
