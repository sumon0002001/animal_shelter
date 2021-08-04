import React from 'react';
import {
  render, act,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import store from '../Reducers';
import Main from '../Components/Main';

describe('rendered Main roles', () => {
  let renderedComponent;
  beforeEach(() => {
    const user = { id: 1, username: 'Ali' };
    act(() => {
      renderedComponent = render(
        <Provider store={store}>
          <Router>
            <Main userTest={user} />
          </Router>
        </Provider>,
      );
    });
  });
  it('renders the main element', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('main', { name: '' });
    expect(main).toBeInTheDocument();
  });
  it('renders the logo link', () => {
    const { getAllByRole } = renderedComponent;
    const main = getAllByRole('link', { name: 'icon Neko Shelter' })[0];
    expect(main).toBeInTheDocument();
  });
  it('renders the user link to profile', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('link', { name: 'icon Ali' });
    expect(main).toBeInTheDocument();
  });
  it('renders the btn link to cats', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('link', { name: 'SAVE A CAT' });
    expect(main).toBeInTheDocument();
  });
  it('renders the btn link to cats2', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('link', { name: 'Get Chosen By A Cat' });
    expect(main).toBeInTheDocument();
  });
  it('renders the facebook link to my facebook', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('link', { name: 'fb' });
    expect(main).toBeInTheDocument();
  });
  it('renders the facebook image', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('img', { name: 'fb' });
    expect(main).toBeInTheDocument();
  });
  it('renders the linkedin link to my linkedin profile', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('link', { name: 'ln' });
    expect(main).toBeInTheDocument();
  });
  it('renders the linkedin image', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('img', { name: 'ln' });
    expect(main).toBeInTheDocument();
  });
  it('renders the github link to my github profile', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('link', { name: 'gh' });
    expect(main).toBeInTheDocument();
  });
  it('renders the github image', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('img', { name: 'gh' });
    expect(main).toBeInTheDocument();
  });
  it('renders the cat gif in grid card', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('img', { name: 'cat' });
    expect(main).toBeInTheDocument();
  });
  it('renders the heading of logo', () => {
    const { getAllByRole } = renderedComponent;
    const main = getAllByRole('heading', { name: 'Neko Shelter' })[0];
    expect(main).toBeInTheDocument();
  });
  it('renders the heading of header img', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: 'HELP MAKING THE WORLD BETTER PLACE FOR KITTENS' });
    expect(main).toBeInTheDocument();
  });
  it('renders the heading of grid card', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: 'Adopt a kitten Now!' });
    expect(main).toBeInTheDocument();
  });
  it('renders quote1', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: '“The smallest feline is a masterpiece.” – Leonardo da Vinci' });
    expect(main).toBeInTheDocument();
  });
  it('renders quote2', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: '“Kittens are angels with whiskers.” – Alexis Flora Hope' });
    expect(main).toBeInTheDocument();
  });
  it('renders quote3', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: '“Cats choose us ; we don’t own them.” – Kristin Cast' });
    expect(main).toBeInTheDocument();
  });
  it('renders credits', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: '@Abdelrhman Amin' });
    expect(main).toBeInTheDocument();
  });
});
