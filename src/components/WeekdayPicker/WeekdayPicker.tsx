import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { getDayOfWeek, WeekDays } from '~/utils/TimeFormat';
import ModalSelector from 'react-native-modal-selector';
import styles from './styles';
import { commonStyle } from '~/styles';

type Props = {
  initialDay: string;
  onChange: (option: { key: string; label: string }) => void;
};

export default function WeekdayPicker({ initialDay, onChange }: Props) {
  return (
    <ModalSelector
      data={WeekDays}
      animationType={'fade'}
      cancelText={'Cancelar'}
      initValue={initialDay}
      onChange={onChange}
      touchableActiveOpacity={0.7}
      childrenContainerStyle={styles.root}
      initValueTextStyle={commonStyle.complement}
      selectStyle={{ borderWidth: 0 }}
      optionStyle={styles.option}
      optionTextStyle={styles.optionText}
      cancelStyle={styles.cancel}
      cancelTextStyle={styles.cancelText}
    />
  );
}
