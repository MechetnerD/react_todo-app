import React, { ReactNode, useState } from 'react';
import { Todo } from '../../types/Todo';

const todosFromServer = [
  {
    id: 1,
    title: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    title: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    title: 'Learn JS',
    completed: true,
  },
  {
    id: 4,
    title: 'Learn React',
    completed: false,
  },
];

type Props = {
  children: ReactNode;
};

interface TodosContextI {
  todos: Todo[];
  setTodos: CallableFunction;
  filter: string;
  setFilter: CallableFunction;
}

export const TodosContext = React.createContext<TodosContextI>({
  todos: [],
  setTodos: () => {},
  filter: 'all',
  setFilter: () => {},
});

export const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(todosFromServer);
  const [filter, setFilter] = useState('all');

  const value = {
    todos,
    setTodos,
    filter,
    setFilter,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
