export interface IWeatherData {
  data: any[]; //DataAPI[];
}

export interface DataAPI {
  lat: number;
  lon: number;
  apiKey: string;
}

export const initialWeatherState: IWeatherData = {
  data: [],
};

export default initialWeatherState;
