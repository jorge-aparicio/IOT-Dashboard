export interface Sensor {
  _id: {
    _str: string;
  };
  data: {
    temperature: number;
    humidity: number;
  };
  datetime: string;
  timestamp: number;

}
