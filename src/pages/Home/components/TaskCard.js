import React from 'react';
import {
  IonCard,
  IonCheckbox,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/react';

import PropType from 'prop-types';

export const dataTestIds = {
  TITLE: 'TITLE',
  COUNT: 'COUNT',
  CHECKBOX: 'CHECKBOX',
};

const TaskCard = ({ task, onClick }) => {
  const { title, count = 0 } = task;

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle data-testid={dataTestIds.TITLE}>{title}</IonCardTitle>
        <IonCardSubtitle data-testid={dataTestIds.COUNT}>
          People Completed Today: {count}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCheckbox
        data-testid={dataTestIds.CHECKBOX}
        onClick={() => {
          onClick(task);
        }}
      />
    </IonCard>
  );
};

TaskCard.propTypes = {
  task: PropType.shape({
    id: PropType.string.isRequired,
    title: PropType.string.isRequired,
    count: PropType.number.isRequired,
  }).isRequired,
  onClick: PropType.func.isRequired,
};

export default TaskCard;
