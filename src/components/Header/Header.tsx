import React, { useState } from 'react';
type Props = {
  onAdd: (title: string) => void;
};

export const Header: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  return (
    <header className="todoapp__header">
      {/* this button should have `active` class only if all todos are completed */}
      <button
        type="button"
        className="todoapp__toggle-all active"
        data-cy="ToggleAllButton"
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
