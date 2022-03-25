import React from 'react';
import Home from '../../src/screens/Home';
import { render, cleanup } from '@testing-library/react-native';

jest.mock('../../src/screens/Home', () => 'Home');

afterEach(cleanup);

describe('Home', () => {
  it('renders correctly', () => {
    const wrapper = render(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
