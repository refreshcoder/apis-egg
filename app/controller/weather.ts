import { Controller } from 'egg';

export default class WeatherController extends Controller {
  public async now() {
    const { ctx } = this;
    const { location, language, unit } = ctx.query;
    ctx.body = await ctx.service.weather.getWeatherNow(
      location,
      language,
      unit,
    );
  }
  public async future() {
    const { ctx } = this;
    const { location, language, unit, start, days } = ctx.query;
    ctx.body = await ctx.service.weather.getWeatherFuture(
      location,
      language,
      unit,
      start,
      days,
    );
  }
  public async suggestion() {
    const { ctx } = this;
    const { location, language } = ctx.query;
    ctx.body = await ctx.service.weather.getSuggestionInfo(location, language);
  }
}
