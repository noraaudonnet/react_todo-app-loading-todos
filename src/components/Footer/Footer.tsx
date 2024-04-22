import React from 'react';
import { Todo } from '../../types/Todo';
import classNames from 'classnames';
import { Status } from '../../types/Status';

type Props = {
  todos: Todo[];
  statusFilter: Status;
  setStatusFilter: (newStatus: Status) => void;
};

export const Footer: React.FC<Props> = ({
  todos,
  statusFilter,
  setStatusFilter,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      {todos.length > 0 && (
        <div>
          <span className="todo-count" data-cy="TodosCounter">
            {todos.filter(todo => !todo.completed).length} items left
          </span>
          <nav className="filter" data-cy="Filter">
            <a
              href="#/"
              className={classNames('filter__link', {
                selected: statusFilter === Status.All,
              })}
              data-cy="FilterLinkAll"
              onClick={() => setStatusFilter(Status.All)}
            >
              {Status.All}
            </a>

            <a
              href="#/active"
              className={classNames('filter__link', {
                selected: statusFilter === Status.Active,
              })}
              data-cy="FilterLinkActive"
              onClick={() => setStatusFilter(Status.Active)}
            >
              {Status.Active}
            </a>

            <a
              href="#/completed"
              className={classNames('filter__link', {
                selected: statusFilter === Status.Completed,
              })}
              data-cy="FilterLinkCompleted"
              onClick={() => setStatusFilter(Status.Completed)}
            >
              {Status.Completed}
            </a>
          </nav>
          {todos.filter(todo => todo.completed).length > 0 && (
            <button
              type="button"
              className="todoapp__clear-completed"
              data-cy="ClearCompletedButton"
            >
              Clear completed
            </button>
          )}
        </div>
      )}
    </footer>
  );
};