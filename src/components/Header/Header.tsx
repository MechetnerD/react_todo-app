import React, { useState } from 'react';
import { Todo } from '../../types/Todo';
import cn from 'classnames';

type Props = {
  onAdd: (title: string) => void;
  todos: Todo[];
  toggleAll: (completed: boolean) => void;
};

export const Header: React.FC<Props> = ({ onAdd, todos, toggleAll }) => {
  const [title, setTitle] = useState('');
  const allCompleted = todos.every(t => t.completed);
  return (
    <header className="todoapp__header">
      {/* this button should have `active` class only if all todos are completed */}
      <button
        type="button"
        className={cn('todoapp__toggle-all', { active: allCompleted })}
        data-cy="ToggleAllButton"
        onClick={() => toggleAll(allCompleted)}
      />

      {/* Add a todo on form submit */}
      <form
        onSubmit={e => {
          e.preventDefault();
          onAdd(title);
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
