import { Service } from 'egg';

/**
 * Weather Service
 */
export default class Weather extends Service {
  /**
	 * getWeather
	 */
  public async getWeather() {
    const { ctx } = this;
    const res = await ctx.curl(
      'https://api.seniverse.com/v3/weather/now.json',
      {
        method: 'GET',
        data: {
          key: 'SCrlfctVDKNRrefXZ',
          location: 'beijing',
          language: 'zh-Hans',
          unit: 'c',
        },
        dataType: 'json',
      },
    );
    return res.data;
  }
}
