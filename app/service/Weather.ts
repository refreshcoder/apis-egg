import { Service } from 'egg';
import Sig from '../util/Sig';

/**
 * Weather Service
 */
export default class Weather extends Service {
  private publicKey = 'PAsvCMq0PsWNdRNN5';
  private privateKey = 'SCrlfctVDKNRrefXZ';

  /**
   * getSig
   * @param ts - unix时间戳（单位：s）
   * @param ttl - 签名有效时间（单位：s）
   */
  private getSig(ts: number, ttl: number) {
    const sig = Sig.weather(this.publicKey, this.privateKey, {
      ts,
      ttl,
    });
    return sig;
  }

  /**
   * getWeatherNow
   * @param location - 地理位置信息
   * @param language - 语言
   * @param unit - 单位
   */
  public async getWeatherNow(location: string, language: string, unit: string) {
    const { ctx } = this;
    const ts = Math.round(new Date().getTime() / 1000);
    const ttl = 60;
    const sig = this.getSig(ts, ttl);
    const res = await ctx.curl(
      'https://api.seniverse.com/v3/weather/now.json',
      {
        method: 'GET',
        data: {
          key: this.privateKey,
          location,
          language,
          unit,
          ts,
          ttl,
          uid: this.publicKey,
          sig,
        },
        dataType: 'json',
      },
    );
    return res.data;
  }

  /**
   * getWeatherFuture
   * @param location - 地理位置信息
   * @param language - 语言
   * @param unit - 单位
   * @param start - 开始日期
   * @param days - 时间段
   */
  public async getWeatherFuture(
    location: string,
    language: string,
    unit: string,
    start: string,
    days: string,
  ) {
    const { ctx } = this;
    const ts = Math.round(new Date().getTime() / 1000);
    const ttl = 60;
    const sig = this.getSig(ts, ttl);
    const res = await ctx.curl(
      'https://api.seniverse.com/v3/weather/daily.json',
      {
        method: 'GET',
        data: {
          key: this.privateKey,
          location,
          language,
          unit,
          start,
          days,
          ts,
          ttl,
          uid: this.publicKey,
          sig,
        },
        dataType: 'json',
      },
    );
    return res.data;
  }

  /**
   * getSuggestionInfo
   * @param location - 地理位置信息
   * @param language - 语言
   */
  public async getSuggestionInfo(location: string, language: string) {
    const { ctx } = this;
    const ts = Math.round(new Date().getTime() / 1000);
    const ttl = 60;
    const sig = this.getSig(ts, ttl);
    const res = await ctx.curl(
      'https://api.seniverse.com/v3/life/suggestion.json',
      {
        method: 'GET',
        data: {
          key: this.privateKey,
          location,
          language,
          ts,
          ttl,
          uid: this.publicKey,
          sig,
        },
        dataType: 'json',
      },
    );
    return res.data;
  }
}
