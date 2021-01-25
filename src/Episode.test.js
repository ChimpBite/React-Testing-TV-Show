import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './components/Episodes';

const episodesRunTest = [
  {
    id: 'fakeid',
    image: {
      medium: 'image.png',
      original: 'image.png',
    },
    name: 'episode',
    season: 'season',
    number: 'number',
    summary: 'summary',
    runtime: 'runtime',
    embedded: {
      episodes: 'fakeinfo',
    },
  },
];
test('Episodes.js renders', () => {
  render(<Episodes episodes={[]} />);
});

test('Episodes shows data when rerendered with episodes prop', () => {
  const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />);

  expect(queryAllByTestId('episode')).toHaveLength(0);
  expect(queryAllByTestId('episode')).toStrictEqual([]);

  rerender(<Episodes episodes={episodesRunTest} />);
  expect(queryAllByTestId('episode')).toHaveLength(0);
});
