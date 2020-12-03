import { Service } from 'egg';

/**
 * Index Service
 */
export default class Index extends Service {

  /**
   * returnInfo to you
   * @param info - your name
   */
  public async returnInfo(info: string) {
    return `${info}`;
  }
}
