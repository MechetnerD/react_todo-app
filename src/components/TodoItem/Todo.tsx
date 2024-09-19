import React from 'react';
import { Todo } from '../../types/Todo';
import cn from 'classnames';

type Props = {
  todo: Todo;
  onRemove: (todoid: number) => void; // Callable Function
  onToggle: (todoid: number) => void;
};

export const TodoItem: React.FC<Props> = ({ todo, onRemove, onToggle }) => {
  console.log('rendering todoItem');

  return (
    <div data-cy="Todo" className={cn('todo', { completed: todo.completed })}>
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          onClick={() => onToggle(todo.id)}
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">
        {todo.title}
      </span>

      <button
        type="button"
        className="todo__remove"
        data-cy="TodoDelete"
        onClick={() => onRemove(todo.id)}
      >
        ×
      </button>

      {/* This form is shown instead of the title and remove button */}
      {/* <form>
        <input
          data-cy="TodoTitleField"
          type="text"
          className="todo__title-field"
          placeholder="Empty todo will be deleted"
          value="Todo is being edited now"
        />
      </form> */}
    </div>
  );
};
