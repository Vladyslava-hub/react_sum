import React from 'react';
import './App.scss';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { Sum } from '../components/Sum';

export const App = () => (
  <>
    <Sum a={2} b={3} /> {/* Sum of 2 and 3 is 5 */}
    <Sum a={-5} b={5} /> {/* Sum of -5 and 5 is 0 */}
    <Sum a={10} /> {/* Sum of 10 and 0 is 10 */}
    <Sum b={5} /> {/* Sum of 0 and 5 is 5 */}
    <Sum /> {/* Sum of 0 and 0 is 0 */}
  </>
);
