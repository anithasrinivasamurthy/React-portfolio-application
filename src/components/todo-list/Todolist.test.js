import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  test('renders the TodoList component', () => {
    render(<TodoList />);
    const headingElement = screen.getByText(/My Todo List !!/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);

    const inputElement = screen.getByPlaceholderText(/Add Todo/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    const todoItem = screen.getByText(/New Todo/i);
    expect(todoItem).toBeInTheDocument();
  });

  test('deletes a todo item', () => {
    render(<TodoList />);

    const inputElement = screen.getByPlaceholderText(/Add Todo/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText(/X/i);
    fireEvent.click(deleteButton);

    const todoItem = screen.queryByText(/New Todo/i);
    expect(todoItem).not.toBeInTheDocument();
  });
});