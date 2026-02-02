import React from 'react';

export const formatCurrency = (value: number): React.ReactNode => {
  return React.createElement(
    'span',
    { className: 'flex items-center gap-1' },
    value.toLocaleString('en-US'),
    React.createElement('img', {
      src: '/images/currency/saudi-riyal.svg',
      alt: 'ريال سعودي',
      className: 'w-3.5 h-3.5',
      style: { filter: 'brightness(0)' },
    })
  );
};
