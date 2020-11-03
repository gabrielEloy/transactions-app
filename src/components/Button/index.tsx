import React, {ReactNode} from 'react';
import {TouchableOpacity, TextInputProps} from 'react-native';
import styles from './styles';

interface Props extends TextInputProps {
  children: ReactNode;
  onPress: () => void;
  buttonStyle?: object;
  removeBackground?: boolean;
}

const Button = (props: Props) => {
  const buttonStyle = [styles.container, props.buttonStyle];
  if (props.removeBackground) {
    buttonStyle.push(styles.removeBackground);
  }
  return <TouchableOpacity style={buttonStyle} {...props} />;
};

export default Button;
