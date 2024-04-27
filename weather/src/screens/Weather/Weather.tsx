import {View, Text} from 'react-native';
import React, {FC} from 'react';

interface IWeather {}

const Weather: FC<IWeather> = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <Text style={{color: 'red'}}>Weather</Text>
    </View>
  );
};

export default Weather;
