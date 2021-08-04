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
import Cats from '../Components/Cats';

describe('rendered Cats roles', () => {
  let renderedComponent;
  beforeEach(() => {
    const user = { id: 1, username: 'Ali' };
    const cats = [
      {
        id: 1,
        pet_name: 'Neko Master',
        pet_color: 'Brown',
        age: 22,
      },
      {
        id: 2,
        pet_name: 'Neko Master2',
        pet_color: 'Brown',
        age: 23,
      },
      {
        id: 3,
        pet_name: 'Neko Master3',
        pet_color: 'Brown',
        age: 24,
      },

    ];
    act(() => {
      renderedComponent = render(
        <Provider store={store}>
          <Router>
            <Cats userTest={user} catsTest={cats} boolTest={false} />
          </Router>
        </Provider>,
      );
    });
  });
  it('renders the navigation element', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('navigation', { name: '' });
    expect(main).toBeInTheDocument();
  });
  it('renders the logo link', () => {
    const { getAllByRole } = renderedComponent;
    const main = getAllByRole('link', { name: 'icon Neko Shelter' })[0];
    expect(main).toBeInTheDocument();
  });
  it('renders the profile link', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('link', { name: 'icon Ali' });
    expect(main).toBeInTheDocument();
  });
  it('renders the cat img', () => {
    const { getAllByRole } = renderedComponent;
    const main = getAllByRole('img', { name: 'cat' })[0];
    expect(main).toBeInTheDocument();
  });
  it('renders the cat hover texture img', () => {
    const { getAllByRole } = renderedComponent;
    const main = getAllByRole('img', { name: 'hearts' })[0];
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
  it('renders the cat header name', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: 'Name: Neko Master' });
    expect(main).toBeInTheDocument();
  });
  it('renders the cat header color', () => {
    const { getAllByRole } = renderedComponent;
    const main = getAllByRole('heading', { name: 'Color: Brown' })[0];
    expect(main).toBeInTheDocument();
  });
  it('renders the cat header age', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: 'Age: 22' });
    expect(main).toBeInTheDocument();
  });
  it('renders the cat2 header name', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: 'Name: Neko Master2' });
    expect(main).toBeInTheDocument();
  });
  it('renders the cat2 header color', () => {
    const { getAllByRole } = renderedComponent;
    const main = getAllByRole('heading', { name: 'Color: Brown' })[0];
    expect(main).toBeInTheDocument();
  });
  it('renders the cat2 header age', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: 'Age: 23' });
    expect(main).toBeInTheDocument();
  });
  it('renders the cat3 header name', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: 'Name: Neko Master3' });
    expect(main).toBeInTheDocument();
  });
  it('renders the cat3 header color', () => {
    const { getAllByRole } = renderedComponent;
    const main = getAllByRole('heading', { name: 'Color: Brown' })[0];
    expect(main).toBeInTheDocument();
  });
  it('renders the cat3 header age', () => {
    const { getByRole } = renderedComponent;
    const main = getByRole('heading', { name: 'Age: 24' });
    expect(main).toBeInTheDocument();
  });
  it('renders the Add to fav btn', () => {
    const { getAllByRole } = renderedComponent;
    const main = getAllByRole('button', { name: 'Add To🌟🌟🌟🌟' })[0];
    expect(main).toBeInTheDocument();
  });
});
