import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { getDayOfWeek, WeekDays } from '~/utils/TimeFormat';
import ModalSelector from 'react-native-modal-selector';
import styles from './styles';
import { commonStyle } from '~/styles';

type Props = {
  day: string;
  setDay: Dispatch<SetStateAction<string>>;
};

export default function WeekdayPicker({ day, setDay }: Props) {
  useEffect(() => {
    setDay(old => old || getDayOfWeek(new Date()));
  }, []);

  return (
    <ModalSelector
      data={WeekDays}
      cancelText={'Cancelar'}
      initValue={day}
      onChange={option => {
        setDay(option.label);
      }}
      childrenContainerStyle={styles.root}
      initValueTextStyle={commonStyle.complement}
      touchableActiveOpacity={0.7}
    />
  );
}
