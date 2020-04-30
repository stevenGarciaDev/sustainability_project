/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

import {
  UserInfo,
  UserNameDisplay,
  UserPhotoIcon,
} from '../../Connect/component/UserConnectItem';

const UserInfoContainer = styled('div')`
  transform: scale(0.65);
`;

const Header = styled('thead')`
  text-align: center;
`;

const Row = styled('tr')`
  text-align: center;
`;

const LeaderboardList = ({ selectedTaskLeaderboard }) => {
  let rank = 0;
  let lastCount = 0;
  const columns = useMemo(
    () => [
      {
        Header: 'Rank',
        accessor: 'rank',
      },
      {
        Header: 'User',
        accessor: 'user',
      },
      {
        Header: 'Count',
        accessor: 'count',
      },
    ],
    []
  );
  const data = selectedTaskLeaderboard.map((user) => {
    if (user.count !== lastCount) {
      lastCount = user.count;
      rank++;
    }

    return {
      rank,
      user: (
        <UserInfoContainer>
          <UserInfo>
            <UserPhotoIcon src={user.profilePhoto} />
            <UserNameDisplay>{user.username}</UserNameDisplay>
          </UserInfo>
        </UserInfoContainer>
      ),
      count: user.count,
    };
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()}>
      <Header>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </Header>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Row {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </Row>
          );
        })}
      </tbody>
    </table>
  );
};

LeaderboardList.propTypes = {
  selectedTaskLeaderboard: PropTypes.arrayOf(PropTypes.object),
};

export default LeaderboardList;
