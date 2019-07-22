import AxiosUtil from '../../utils/AxiosUtil';

const mapping = '/book';

export default class Api {
  /**
   * search book
   * @param {Object} param : book search query object
   */
  static searchBook(param) {
    return AxiosUtil.get(`${mapping}/search`, param);
  }
  /**
   * get top 10 search histories
   */
  static getTop10Histories() {
    return AxiosUtil.get(`${mapping}/search/topHistory`);
  }
}
