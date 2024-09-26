import { createRoot } from 'react-dom/client';

import './styles/index.scss';
// import './styles/todo-list.scss';
import './styles/filters.scss';
import { App } from './App';
import { TodosContextProvider } from './components/Context/TodosContext';

const container = document.getElementById('root') as HTMLDivElement;

createRoot(container).render(
  <TodosContextProvider>
    <App />
  </TodosContextProvider>,
);
