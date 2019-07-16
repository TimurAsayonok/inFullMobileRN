import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Styles } from './styles';

export const EmptyListMessage = (): JSX.Element => (
  <View style={Styles.emptyMessageContainer}>
    <Text style={Styles.emptyMessage}>Ups. Empty results list =( </Text>
  </View>
);
