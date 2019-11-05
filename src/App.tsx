import React from 'react';
import { render } from 'react-dom';
import { GameObserver } from './components/GameObserver';
import './css/main.css';

render(
  <GameObserver />,
  document.getElementById('root')
);
