import { Service } from 'egg';
import crypto = require('crypto');

/**
 * Weather Service
 */
export default class Location extends Service {
  private url = 'https://apis.map.qq.com';
  private api = '/ws/geocoder/v1';
  private key = 'S4ZBZ-ZV534-RCXUQ-DXCQ2-7NNJF-7RBGS';
  private sk = 'mWxgRAeQ1wzuskI9bHFhTU0o1ghi4P5q';
  /**
   * getLocation
   * @param latitude - {longitude,latitude}
   * @param longitude - {longitude,latitude}
   */
  public async getLocation(latitude: number, longitude: number) {
    const queryStr = `key=${this.key}&location=${latitude},${longitude}`;
    const hash = crypto.createHash('md5');
    const { ctx } = this;
    hash.update(`${this.api}?${queryStr}${this.sk}`);
    const sig = hash.digest('hex');
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
