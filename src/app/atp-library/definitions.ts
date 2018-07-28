import { Observable } from 'rxjs/Rx';

/**
 * AmazingTimePicker configuration
 * when calling open() function from 'AmazingTimePickerService' passed as parameter
 */
export interface TimePickerConfig {
  time?: string;
  theme?: 'dark' | 'light' | 'material-red' | 'material-green' | 'material-blue' | 'material-purple' | 'material-orange';
  rangeTime?: RangeTime;
  arrowStyle?: Pallete;
  locale?: string;
  preference?: IDisplayPreference;
  changeToMinutes?: boolean;
  animation?: 'fade' | 'rotate' | false;
  onlyHour?: boolean;
  onlyMinute?: boolean;
  onlyAM?: boolean;
  onlyPM?: boolean;
  hours24?: boolean;
}

export interface RangeTime {
  start: string;
  end: string;
}

export interface Pallete {
  background?: string;
  color?: string;
}

export interface IDialogResult {
  afterClose(): Observable<string>;
}

export interface IClockNumber {
  time: String;
  left: string;
  top: string;
  type: String;
}

export interface IDisplayPreference {
  minute?: Function;
  hour?: Function;
  separator?: string;
  labels?: {
    ok?: string;
    cancel?: string;
  };
  period?(period: 'AM' | 'PM');
  clockMinute?(minute: any);
  clockHour?(hour: any);
}

export interface ITime {
  minute: number;
  hour: number;
  ampm: 'AM' | 'PM';
}

export const ehours24 = {
  1 : '13',
  2 : '14',
  3 : '15',
  4 : '16',
  5 : '15',
  6 : '18',
  7 : '19',
  8 : '20',
  9 : '21',
  10: '22',
  11: '23',
  12: '00'
};
