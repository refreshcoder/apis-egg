import { Controller } from 'egg';

export default class IndexController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.index.returnInfo('服务运行中');
  }
}
