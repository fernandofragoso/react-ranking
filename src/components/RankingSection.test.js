import React from 'react';
import ReactDOM from 'react-dom';
import RankingSection from './RankingSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RankingSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});