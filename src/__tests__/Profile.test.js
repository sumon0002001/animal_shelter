import React from 'react';
import { render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import store from '../Reducers';
import Profile from '../Components/Profile';

describe('rendered Profile roles', () => {
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
    const userFavourites = [
      {
        id: 1,
        user_id: 1,
        cat_id: 1,
      },
      {
        id: 2,
        user_id: 1,
        cat_id: 3,
      },
    ];
    act(() => {
      renderedComponent = render(
        <Provider store={store}>
          <Router>
            <Profile
              userTest={user}
              catsTest={cats}
              boolTest={false}
              userFavouritesTest={userFavourites}
            />
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
  it('renders the x button', () => {
    const { getAllByRole } = renderedComponent;
    const main = getAllByRole('button', { name: 'x' })[0];
    expect(main).toBeInTheDocument();
  });
});

describe('rendered Profile elements', () => {
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
    const userFavourites = [
      {
        id: 1,
        user_id: 1,
        cat_id: 1,
      },
      {
        id: 2,
        user_id: 1,
        cat_id: 3,
      },
    ];
    act(() => {
      renderedComponent = render(
        <Provider store={store}>
          <Router>
            <Profile
              userTest={user}
              catsTest={cats}
              boolTest={false}
              userFavouritesTest={userFavourites}
            />
          </Router>
        </Provider>,
      );
    });
  });
  it('renders the profile user name', () => {
    const { container } = renderedComponent;
    const main = container.querySelector('h3');
    expect(main).toHaveTextContent('Ali');
  });
  it('renders the profile user number', () => {
    const { container } = renderedComponent;
    const main = container.querySelector('span');
    expect(main).toHaveTextContent('Number: #1');
  });
  it('renders the user favourite cat image', () => {
    const { container } = renderedComponent;
    const main = container.querySelector('.cat-img');
    expect(main).toBeInTheDocument();
  });
  it('renders the user 1st favourite cat name', () => {
    const { container } = renderedComponent;
    const main = container.querySelector('.cat1-name');
    expect(main).toHaveTextContent('Neko Master');
  });
  it('renders the user 1st favourite cat color', () => {
    const { container } = renderedComponent;
    const main = container.querySelector('.cat1-color');
    expect(main).toHaveTextContent('Brown');
  });
  it('renders the user 1st favourite cat age', () => {
    const { container } = renderedComponent;
    const main = container.querySelector('.cat1-age');
    expect(main).toHaveTextContent('22');
  });
  it('renders the user 3st favourite cat name', () => {
    const { container } = renderedComponent;
    const main = container.querySelector('.cat3-name');
    expect(main).toHaveTextContent('Neko Master');
  });
  it('renders the user 3st favourite cat color', () => {
    const { container } = renderedComponent;
    const main = container.querySelector('.cat3-color');
    expect(main).toHaveTextContent('Brown');
  });
  it('renders the user 3st favourite cat age', () => {
    const { container } = renderedComponent;
    const main = container.querySelector('.cat3-age');
    expect(main).toHaveTextContent('24');
  });
});
