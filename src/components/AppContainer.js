import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, View} from 'react-native';
import {common} from '../styles/common.style';

export const AppContainer = ({children, style}) => {
  return (
    <SafeAreaView style={[common.container, style]}>
      <View style={common.body}>{children}</View>
    </SafeAreaView>
  );
};

AppContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.object,
  title: PropTypes.string,
};
