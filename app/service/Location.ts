import { Service } from 'egg';
import Sig from '../util/Sig';

/**
 * Weather Service
 */
export default class Location extends Service {
  private url = 'https://apis.map.qq.com';
  private api = '/ws/geocoder/v1';
  private key = 'S4ZBZ-ZV534-RCXUQ-DXCQ2-7NNJF-7RBGS';
  private sk = 'mWxgRAeQ1wzuskI9bHFhTU0o1ghi4P5q';

  /**
   * getLocationInfoByGeocoder
   * @param latitude - 纬度
   * @param longitude - 经度
   */
  public async getLocationInfoByGeocoder(latitude: number, longitude: number) {
    const { ctx } = this;
    const sig = Sig.location(this.api, this.key, this.sk, {
      location: `${latitude},${longitude}`,
      get_poi: '1',
    });
    const res = await ctx.curl(this.url + this.api, {
      method: 'GET',
      data: {
        key: this.key,
        location: `${latitude},${longitude}`,
        get_poi: '1',
        sig,
      },
      dataType: 'json',
    });
    return res.data;
  }

  /** placeSearch
   * @param latitude - 纬度
   * @param longitude - 经度
   */
  public async placeSearch(latitude: number, longitude: number) {
    const { ctx } = this;
    const sig = Sig.location(this.api, this.key, this.sk, {
      location: `${latitude},${longitude}`,
    });
    const res = await ctx.curl(this.url + this.api, {
      method: 'GET',
      data: {
        key: this.key,
        location: `${latitude},${longitude}`,
        sig,
      },
      dataType: 'json',
    });
    return res.data;
  }
}
