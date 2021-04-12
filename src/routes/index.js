import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Posts from '../screens/Posts';
import Splash from '../screens/Splash';
import Users from '../screens/Users';

const Drawer = createDrawerNavigator();

const Router = () => {
  const [showSplash, setShowSplash] = useState(true);
  const toggleSplash = () => setShowSplash(prevState => !prevState);

  useEffect(() => {
    const timeout = setTimeout(async () => toggleSplash(), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Posts" component={Posts} />
        <Drawer.Screen name="Users" component={Users} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
