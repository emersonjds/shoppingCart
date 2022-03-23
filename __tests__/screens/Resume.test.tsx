import React from 'react';
import { render, cleanup } from '@testing-library/react-native';
import Resume from '../../src/screens/Resume';

jest.mock('../../src/screens/Resume', () => 'Resume');

afterEach(cleanup);

describe('Resume', () => {
  it('renders correctly', () => {
    const wrapper = render(<Resume />);
    expect(wrapper).toMatchSnapshot();
  });
});
