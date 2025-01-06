// src/App.jsx
import React from 'react';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { Sum } from './components/Sum'; // Переконайтеся, що правильно вказуєте шлях до компонента

export const App = () => (
  <div>
    <h1>Sum Component Test</h1>
    <Sum a={2} b={3} />
    <Sum a={-5} b={5} />
    <Sum a={10} />
    <Sum b={5} />
    <Sum />
  </div>
);
