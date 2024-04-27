import {WeatherAPIAPIs} from '@API/WeatherAPI';
import {DataAPI} from '@models/weather';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getWeatherDataAsync = createAsyncThunk(
  'weather/getWeatherDataAsync',
  async (dataWeather: DataAPI) => {
    const {lat, lon, apiKey} = dataWeather;

    try {
      const {data} = await WeatherAPIAPIs.get(
        `forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
      );
      const {list} = data;
      //   console.log('data weather list', JSON.stringify(allDataList, null, 2));
      return list;
    } catch (error) {
      console.log('fetch data ERRROR', error);
    }
  },
);
