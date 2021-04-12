import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {emptyStyle} from '../styles/components/empty.style';

export const EmptySection = ({text}) => {
  return (
    <View style={emptyStyle.container}>
      <Icon name="inbox" style={emptyStyle.icon} />

      <Text style={emptyStyle.text}>{text || 'data is not available'}</Text>
    </View>
  );
};

EmptySection.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};
