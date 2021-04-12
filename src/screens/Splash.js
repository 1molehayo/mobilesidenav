import React from 'react';
import {ActivityIndicator, Image, SafeAreaView, View} from 'react-native';
import {color} from '../styles/variables.style';
import {common} from '../styles/common.style';
import {splashStyles} from '../styles/screens/splash.style';
import Logo from '../assets/img/gokada-logo.png';

const Splash = () => {
  return (
    <SafeAreaView style={common.container}>
      <View style={splashStyles.body}>
        <Image source={Logo} style={splashStyles.image} />

        <View>
          <ActivityIndicator color={color.PRIMARY} size="large" animating />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
