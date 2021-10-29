import { screen, cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Todo from '../todo'

afterEach(() => {
    cleanup()
})

test('should render non-completed todo', () => {
    const todo = {id: 1, title: 'olololo', completed: false}
    render(<Todo todo={todo} />)
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument(); 
    expect(todoElement).not.toContainHTML('<strike>')
})

test('should render completed todo', () => {
    const todo = {id: 2, title: 'alalala', completed: true}
    render(<Todo todo={todo} />)
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument(); 
    expect(todoElement).toContainHTML('</strike>')
})