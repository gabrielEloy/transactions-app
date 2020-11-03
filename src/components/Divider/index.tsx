import React from 'react';
import {View} from 'react-native';

import {COLORS} from 'src/themes/main';
import styles from './styles';

interface Props {
  thickness?: number;
  color?: string;
}

const index = ({thickness = 1, color = COLORS.gray}: Props) => (
  <View style={[styles.line, {height: thickness, backgroundColor: color}]} />
);

export default index;
