import {initialWeatherList} from '@models/responseWeather';
import {getWeatherDataAsync} from '@redux/actions/WeatherAction';
import {createSlice} from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialWeatherList,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWeatherDataAsync.pending, state => {
        state.loading = true;
      })
      .addCase(getWeatherDataAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload; // tidak pakai spread karena jenis job tetap ato statis, itu2 aja
        state.loading = false;
      })
      .addCase(
        getWeatherDataAsync.rejected,
        (state = initialWeatherList, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        },
      );
  },
});

export default weatherSlice.reducer;
