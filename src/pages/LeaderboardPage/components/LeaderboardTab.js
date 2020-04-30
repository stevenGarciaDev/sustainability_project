import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IonSegmentButton, IonLabel } from '@ionic/react';

const SegmentButton = styled(IonSegmentButton)`
  display: inline-block;
  min-width: 100px;
  width: auto;
`;

const Label = styled(IonLabel)``;

const LeaderboardItem = ({ value, name }) => {
  return (
    <SegmentButton value={value}>
      <Label>{name}</Label>
    </SegmentButton>
  );
};

LeaderboardItem.propTypes = {
  value: PropTypes.object,
  name: PropTypes.string,
};

export default LeaderboardItem;
