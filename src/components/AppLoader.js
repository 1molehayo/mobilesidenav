import React from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';
import {common} from '../styles/common.style';
import {color} from '../styles/variables.style';

export const AppLoader = () => {
  return (
    <Modal animationType="none" transparent visible>
      <View style={common.loaderContainer}>
        <View style={common.loader}>
          <ActivityIndicator animating size="large" color={color.WHITE} />
        </View>
      </View>
    </Modal>
  );
};
