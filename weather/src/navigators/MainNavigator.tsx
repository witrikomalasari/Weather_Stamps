import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Weather from '@screens/Weather/Weather';
import {ComponentProps, Fragment} from 'react';

export type NavigatorParamList = {
  Weather: undefined;
};

const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppStack = () => {
  const Route = (
    <Fragment>
      <Stack.Screen
        name="Weather"
        component={Weather}
        options={{headerShown: true}}
      />
    </Fragment>
  );

  const getCurrentRoutes = () => {
    return Route;
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'simple_push',
      }}>
      {getCurrentRoutes()}
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<ComponentProps<typeof NavigationContainer>> {}

export const MainNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer
      theme={WeatherTheme}
      {...props} //to stop navigation persistence
    >
      <AppStack />
    </NavigationContainer>
  );
};

MainNavigator.displayName = 'MainNavigator';

const exitRoutes = ['Weather'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);

const WeatherTheme = {
  ...DefaultTheme,
  DarkTheme: false,
  colors: {
    ...DefaultTheme.colors,
  },
};
