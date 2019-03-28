import React from 'react';
import Page from './Page';
import EmployeeImagesGrid from '../container/EmployeeImagesGrid';
import FilterBoxContainer from '../container/FilterBoxContainer';

const MeetTheTeam = () => (
  <Page>
    <FilterBoxContainer />
    <EmployeeImagesGrid />
    The team at Crescendo Collective is designed to outpace and outperform larger agencies; we combine industry-leading
    technology with a work ethic rooted in trust and service to clients. Let us partner with you and prove why we’re the
    most advanced digital agency in the Midwest.
  </Page>
);

export default MeetTheTeam;
