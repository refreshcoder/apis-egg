import { Controller } from 'egg';

export default class WeatherController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.weather.getWeather();
  }
}
