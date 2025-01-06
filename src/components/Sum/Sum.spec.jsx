// cypress/integration/sum_spec.js
import React from 'react';
import { mount } from '@cypress/react18';
import { Sum } from './Sum'; // Іменований імпорт компонента Sum

describe('Sum', () => {
  it('should sum positive numbers', () => {
    mount(<Sum a={7} b={10} />); // Рендеримо компонент з a=7, b=10

    cy.get('p').should('have.text', 'Sum of 7 and 10 is 17'); // Перевіряємо текст
  });

  it('should sum positive and negative numbers', () => {
    mount(<Sum a={6} b={-4} />); // Рендеримо компонент з a=6, b=-4

    cy.get('p').should('have.text', 'Sum of 6 and -4 is 2'); // Перевіряємо текст
  });

  it('should sum negative numbers', () => {
    mount(<Sum a={-40} b={-2} />); // Рендеримо компонент з a=-40, b=-2

    cy.get('p').should('have.text', 'Sum of -40 and -2 is -42'); // Перевіряємо текст
  });

  it('should sum "a" with 0 if "b" is not given', () => {
    mount(<Sum a={6} />); // Рендеримо компонент з a=6 (b не передано)

    cy.get('p').should('have.text', 'Sum of 6 and 0 is 6'); // Перевіряємо текст
  });

  it('should sum 0 with "b" if "a" is not given', () => {
    mount(<Sum b={12} />); // Рендеримо компонент з b=12 (a не передано)

    cy.get('p').should('have.text', 'Sum of 0 and 12 is 12'); // Перевіряємо текст
  });

  it('should sum 0 with 0 if "a" and "b" are not given', () => {
    mount(<Sum />); // Рендеримо компонент без параметрів

    cy.get('p').should('have.text', 'Sum of 0 and 0 is 0'); // Перевіряємо текст
  });
});
