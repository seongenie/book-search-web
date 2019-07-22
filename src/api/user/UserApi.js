import AxiosUtil from '../../utils/AxiosUtil';

const mapping = '/user';

export default class Api {
  static signin(payload) {
    return AxiosUtil.post(`${mapping}/signin`, payload);
  }
  static signup(payload) {
    return AxiosUtil.post(`${mapping}/signup`, payload);
  }
  static getMyHistories() {
    return AxiosUtil.get(`${mapping}/histories`);
  }
}
