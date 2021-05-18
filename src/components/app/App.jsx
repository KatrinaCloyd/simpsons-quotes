import React from 'react';
import SimpsonsQuote from '../../containers/quotes/SimpsonsQuote';
import style from './app.css';

export default function App() {
  return (
    <div className={style.main}>
      <SimpsonsQuote />
    </div>
  );
}
