import React from 'react';

export const Sum = ({ a, b }) => {
  const result = a + b;

  return (
    <p>
      Sum of {a} and {b} is {result}
    </p>
  );
};
