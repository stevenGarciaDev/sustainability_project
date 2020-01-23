import React from 'react';
import {
  IonCard,
  IonCheckbox,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/react';

import PropType from 'prop-types';

const TaskCard = ({ title, count = 0 }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>People Completed Today: {count}</IonCardSubtitle>
      </IonCardHeader>
      <IonCheckbox />
    </IonCard>
  );
};

TaskCard.propTypes = {
  title: PropType.string.isRequired,
  count: PropType.number.isRequired,
};

export default TaskCard;
