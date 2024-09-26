import React, { useContext, useState } from 'react';
import cn from 'classnames';
import { TodosContext } from '../Context/TodosContext';
import { Todo } from '../../types/Todo';

export const Header: React.FC = () => {
  const { todos, setTodos } = useContext(TodosContext);

  const handleAddTodo = (title: string) => {
    const maxIds = todos.map(todo => todo.id);
    const id = Math.max(...maxIds) + 1;

    setTodos((todos: Todo[]) => [...todos, { id, title, completed: false }]);
  };

  const handleToggleAll = (allCompleted: boolean) => {
    let updatedTodos;

    if (allCompleted) {
      updatedTodos = todos.map(t => ({ ...t, completed: false }));
    } else {
      updatedTodos = todos.map(t => ({ ...t, completed: true }));
    }

    setTodos(updatedTodos);
  };

  const [title, setTitle] = useState('');
  const allCompleted = todos.every(t => t.completed);

  return (
    <header className="todoapp__header">
      {/* this button should have `active` class only if all todos are completed */}
      <button
        type="button"
        className={cn('todoapp__toggle-all', { active: allCompleted })}
        data-cy="ToggleAllButton"
        onClick={() => handleToggleAll(allCompleted)}
      />

      {/* Add a todo on form submit */}
      <form
        onSubmit={e => {
          e.preventDefault();
          handleAddTodo(title);
          setTitle('');
        }}
      >
        <input
          data-cy="NewTodoField"
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          onChange={e => {
            setTitle(e.target.value);
          }}
          value={title}
        />
      </form>
    </header>
  );
};
