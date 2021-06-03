import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { commonStyle } from '~/styles';
import styles from './styles';

interface ButtonProps<T> extends RectButtonProperties {
  active: boolean;
  setter: Dispatch<SetStateAction<T[]>>;
  item: T;
  allItem: T;
  allItems: T[];
  text: string;
}

export default function StateButton<T>(props: ButtonProps<T>) {

  const toggleButton = useCallback(
    _ => {
      props.setter(old => {
        const search = old.indexOf(props.item);
        // item not selected
        const newEnvs = search === -1
          ? (
            // select all items
            props.item === props.allItem
            ? [props.allItem]
            : [...old, props.item]
          ) : (
            props.item === props.allItem
              ? []
              : [...old.slice(0, search), ...old.slice(search + 1)]
          );
        // if total is selected, there must be only it selected
        const idxAll = newEnvs.indexOf(props.allItem);
        return idxAll !== -1 && newEnvs.length > 1
          ? [...newEnvs.slice(0, idxAll), ...newEnvs.slice(idxAll + 1)]
          : newEnvs;
      });
    },
    [props],
  );

  return (
    <RectButton
      activeOpacity={1}
      style={[styles.container, props.active ? styles.active : {}]}
      onPress={toggleButton}
      {...props}>
      <Text style={[styles.buttonText, props.active ? commonStyle.bold : {}]}>
        {props.text}
      </Text>
    </RectButton>
  );
}
