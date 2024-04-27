interface IListWeather {
  data: DataAPIforListDate[];
  status?: string;
  loading?: boolean;
  error?: string | null;
}

interface Temparature {
  temp: number; //306.41,
  feels_like: number; //313.41;
  temp_min: number; //305.37;
  temp_max: number; //306.41;
  pressure: number; //1008;
  sea_level: number; //1008;
  grnd_level: number; //1005;
  humidity: number; //77;
  temp_kf: number; //1.04;
}

interface Weather {
  id: number; //500;
  main: string; //'Rain';
  description: string; //'light rain';
  icon: string; //'10d';
}
interface Clouds {
  all: number; //40;
}

interface Wind {
  speed: number; //4.53;
  deg: number; //48;
  gust: number; //5.08;
}

interface Rain {
  '3h': number; //1.08;
}

interface Sys {
  pod: string; //'d';
}

export interface DataAPIforListDate {
  include(): unknown;
  dt: number; //1714197600,
  main?: Temparature;
  weather?: Weather[];
  clouds?: Clouds;
  wind?: Wind;
  visibility?: number; //10000;
  pop?: number; //0.76;
  rain?: Rain;
  sys?: Sys;
  dt_txt: string; //'2024-04-27 06:00:00';
}

export const initialWeatherList: IListWeather = {
  data: [],
  status: 'idle', // 'idle' | 'succeeded' | 'failed'
  loading: false,
  error: null,
};
