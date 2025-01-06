// cypress/integration/Sum.spec.jsx
import React from 'react';
import { mount } from '@cypress/react18';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { Sum } from '../src/components/Sum'; // Переконайтеся, що правильно вказуєте шлях

describe('Sum component tests', () => {
  it('should correctly sum positive numbers', () => {
    mount(<Sum a={2} b={3} />);
    cy.get('p').should('have.text', 'Sum of 2 and 3 is 5');
  });

  it('should sum positive and negative numbers', () => {
    mount(<Sum a={6} b={-4} />);
    cy.get('p').should('have.text', 'Sum of 6 and -4 is 2');
  });

  it('should sum only positive numbers', () => {
    mount(<Sum a={5} b={3} />);
    cy.get('p').should('have.text', 'Sum of 5 and 3 is 8');
  });

  it('should handle missing b and default to 0', () => {
    mount(<Sum a={5} />);
    cy.get('p').should('have.text', 'Sum of 5 and 0 is 5');
  });

  it('should handle missing a and default to 0', () => {
    mount(<Sum b={4} />);
    cy.get('p').should('have.text', 'Sum of 0 and 4 is 4');
  });

  it('should handle missing a and b, and default to 0', () => {
    mount(<Sum />);
    cy.get('p').should('have.text', 'Sum of 0 and 0 is 0');
  });
});
