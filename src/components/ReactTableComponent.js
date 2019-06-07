import ReactTable from 'react-table';
import React, { Component } from 'react';

import { data } from './data';

const columns = [
  {
    Header: 'Date',
    accessor: 'eventDates',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Name',
    accessor: 'name',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Type',
    accessor: 'eventType',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
  },
  {
    Header: 'Total Attended',
    accessor: 'actualAttended',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'Total Registered',
    accessor: 'actualRegistered',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
];

export default class ReactTableComponent extends Component {
  render() {
    return (
      <div style={{ padding: '50px' }}>
        <ReactTable
          manual
          minRows={0}
          pageSize={1}
          data={data}
          columns={columns}
          pages={0}
          showPagination={true}
        />
      </div>
    );
  }
}
