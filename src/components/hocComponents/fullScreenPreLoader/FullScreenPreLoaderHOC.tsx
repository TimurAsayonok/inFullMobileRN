import React from 'react';
import { View, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import { Styles } from './styles';

export default (Component) => {
  return ({ isFetching, children, ...props }) => (
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
