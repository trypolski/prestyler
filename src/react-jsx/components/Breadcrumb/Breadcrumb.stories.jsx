import React from 'react';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

export function BasicBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbItem url="/">Home</BreadcrumbItem>
      <BreadcrumbItem url="/library">Library</BreadcrumbItem>
      <BreadcrumbItem url="/data" isActive>
        Data
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
