import React from 'react';
import { render } from 'react-dom';
import { GameObserver } from './components/GameObserver';
import './css/main.css';

// Entry point
render(
  <GameObserver />,
  document.getElementById('root')
);
