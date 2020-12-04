// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportIndex from '../../../app/controller/index';
import ExportLocation from '../../../app/controller/location';
import ExportWeather from '../../../app/controller/weather';

declare module 'egg' {
  interface IController {
    index: ExportIndex;
    location: ExportLocation;
    weather: ExportWeather;
  }
}
