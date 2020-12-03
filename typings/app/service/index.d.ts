// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportLocation from '../../../app/service/Location';
import ExportTest from '../../../app/service/Index';
import ExportWeather from '../../../app/service/Weather';

declare module 'egg' {
  interface IService {
    location: AutoInstanceType<typeof ExportLocation>;
    test: AutoInstanceType<typeof ExportTest>;
    weather: AutoInstanceType<typeof ExportWeather>;
  }
}
