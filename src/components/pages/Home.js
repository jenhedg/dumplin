import React from 'react';
import MainHero from '../container/MainHero';
import Page from './Page';
import style from './styles/Home.styles';

export const UnstyledHome = ({ className }) => (
  <Page className={className}>
    <MainHero />
  </Page>
);

export default style(UnstyledHome);
