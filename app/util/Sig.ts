import crypto = require('crypto');

function dataToQuery(data: any) {
  const keys = Object.keys(data);
  const list = keys.map(val => {
    return `${val}=${data[val]}`;
  }).sort();
  return list.join('&');
}

class Sig {
  /**
   * location
   */
  public location(api: string, key: string, sk: string, verifyData: any) {
    const hash = crypto.createHash('md5');
    const queryStr = `${api}?${dataToQuery({
      key,
      ...verifyData,
    })}${sk}`;
    hash.update(queryStr);
    const sig = hash.digest('hex');
    return sig;
  }
  /**
   * weather
   */
  public weather(
    publicKey: string,
    privateKey: string,
    verifyData: { ts: number; ttl: number },
  ) {
    const Hmac = crypto.createHmac('sha1', privateKey);
    const queryStr = `${dataToQuery(verifyData)}&uid=${publicKey}`;
    Hmac.update(queryStr);
    const sig = encodeURI(Hmac.digest('base64'));
    return sig;
  }
}
export default new Sig();
