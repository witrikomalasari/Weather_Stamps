import {Spacer} from '@components/atoms';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {useAppSelector} from '@hooks/useAppSelector';
import {getWeatherDataAsync} from '@redux/actions/WeatherAction';
import {formatDate} from '@utils/Date';
import React, {FC, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface IWeather {}

const Weather: FC<IWeather> = () => {
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(state => state.weather);

  let apiKey: string = 'a7611e6d98787da31cc866e04003a71e';
  let lat: number = -6.24175;
  let lon: number = 107.03329;

  useEffect(() => {
    dispatch(getWeatherDataAsync({lat, lon, apiKey}));
  }, [dispatch, apiKey, lat, lon]);

  const timeFilter = data.filter(e => {
    let getTime = e.dt_txt.split(' ')[1];
    // console.log('coba ajah', cobajah); // 09:00:00
    let match = getTime === '09:00:00';
    return match;
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={styles.txt}>Weather Forecast: </Text>
      <FlatList
        keyExtractor={(_item, index) => 'key' + index}
        data={timeFilter}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        nestedScrollEnabled
        renderItem={({item}) => {
          // console.log('item', item);
          return (
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.txt}>{formatDate(item?.dt_txt)}: </Text>
              <Spacer width={10} />
              <Text style={styles.txt}>{item?.main?.temp}</Text>
              <Text style={styles.txt}>&deg;C</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  txt: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'roboto',
  },
});

export default Weather;
