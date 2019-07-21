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
}
