import React, { PropsWithChildren } from 'react';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import styles from './styles';

type ButtonProps = PropsWithChildren<RectButtonProperties> & {
  type?: 'icon';
};

export default function Button(props: ButtonProps) {
  return (
    <RectButton
      activeOpacity={0.6}
      style={[
        styles.container,
        props.type ? styles.iconButton : styles.textButton,
        !props.enabled && props.enabled !== undefined ? styles.disabled : {},
      ]}
      {...props}>
      {props.children}
    </RectButton>
  );
}
