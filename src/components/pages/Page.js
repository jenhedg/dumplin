import React from 'react';
import style from './styles/Page.styles';

export const UnstyledPage = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default style(UnstyledPage);
