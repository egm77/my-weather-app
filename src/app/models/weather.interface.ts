export interface Weather {
  feels_like?: number;
  description?: string;
  icon?: string;
  name: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  date: Date;
}
