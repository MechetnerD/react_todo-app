import React, { Context, ReactNode, useState } from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  children: ReactNode;
};

interface TodosContextI {
  todos: Todo[];
  setTodos: CallableFunction;
}

export const TodosContext: TodosContextI = React.createContext({
  todos: [],
  setTodos: () => {},
});

const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleUpdateTodos = (updatedTodos: Todo[]) => {
    setTodos(updatedTodos);
  };

  const value = {
    todos,
    setTodos: handleUpdateTodos,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
