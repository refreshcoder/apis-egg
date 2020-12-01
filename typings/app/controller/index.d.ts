// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportLocation from '../../../app/controller/location';
import ExportWeather from '../../../app/controller/weather';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    location: ExportLocation;
    weather: ExportWeather;
  }
}
