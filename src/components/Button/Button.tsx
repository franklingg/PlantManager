import React, { PropsWithChildren } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styles from './styles';

type ButtonProps = PropsWithChildren<TouchableOpacityProps> & {
  type?: 'icon';
};

export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      style={props.type ? styles.iconButton : styles.textButton}
      {...props}>
      {props.children}
    </TouchableOpacity>
  );
}
