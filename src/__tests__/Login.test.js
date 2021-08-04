import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../Reducers';
import Login from '../Components/Login';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('rendered Login form', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>,
    );
  });
  it('renders the div container', () => {
    const { container } = renderedComponent;
    const main = container.querySelector('.login-container');
    expect(main).toBeInTheDocument();
  });
  it('renders the input form', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('textbox', { name: '' });
    expect(main).toBeInTheDocument();
  });
  it('renders the submit button', () => {
    const { container } = renderedComponent;
    const main = container.querySelector('.btn-login');
    expect(main).toBeInTheDocument();
  });
  it('renders the instructions', () => {
    const { container } = renderedComponent;
    const main = container.querySelector('span');
    expect(main).toHaveTextContent('Only English letters!');
  });
  it('renders the invalid inputs', () => {
    const { container } = renderedComponent;
    const main = container.querySelector('span');
    expect(main).toHaveTextContent('No spaces or symbols or numbers');
  });
  it('Redirect to login page if not a user', () => {
    expect(screen.queryByPlaceholderText('Enter Your Name!')).toBeInTheDocument();
  });
  it('Displays the username input', () => {
    const { container } = renderedComponent;
    const input = container.querySelector('.login-input');
    fireEvent.change(input, { target: { value: 'Ali' } });
    expect(input).toHaveDisplayValue('Ali');
  });
});
