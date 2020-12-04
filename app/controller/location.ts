import { Controller } from 'egg';

export default class LocationController extends Controller {
  public async geocoder() {
    const { ctx } = this;
    const query = this.ctx.query;
    const { latitude, longitude } = query;
    ctx.body = await ctx.service.location.getLocationInfoByGeocoder(latitude, longitude);
  }
}
