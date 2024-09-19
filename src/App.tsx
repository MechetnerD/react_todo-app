/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Todo } from './types/Todo';

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

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(todosFromServer);

  const handleRemoveTodo = (todoId: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);

    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId: number) => {
    console.log('toggling');

    const updatedTodos = todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    console.log(updatedTodos);

    setTodos(updatedTodos);
  };

  const handleAddTodo = (title: string) => {
    const maxIds = todos.map(todo => todo.id);
    const id = Math.max(...maxIds) + 1;

    setTodos(prev => [...prev, { id, title, completed: false }]);
  };

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      <div className="todoapp__content">
        <Header onAdd={handleAddTodo} />

        <Main todos={todos} onRemove={handleRemoveTodo} onToggle={toggleTodo} />

        {/* Hide the footer if there are no todos */}
        {todos.length !== 0 && <Footer todos={todos} />}
      </div>
    </div>
  );
};
