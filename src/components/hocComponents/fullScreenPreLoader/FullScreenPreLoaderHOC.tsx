import React from 'react';
import { View, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import { Styles } from './styles';

// Props types
interface Props {
  isFetching: boolean
  children: JSX.Element
};

export default (Component: JSX.Element) => {
  return ({ isFetching, children, ...props }: Props): JSX.Element => (
    <Component {...props} style={Styles.container}>
      {isFetching &&
        <View
          style={[
            StyleSheet.absoluteFill,
            Styles.preloadContainer,
          ]}
        >
          <ActivityIndicator
            color="white"
            size={Platform.OS === 'android' ? 72 : 'large'}
            animating
          />
        </View>
      }
      {children}
    </Component>
  );
};
