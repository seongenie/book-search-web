import axios from 'axios';
import qs from 'qs';
import Constants from '../constants/HttpConstant';
import SpinnerUtil from './SpinnerUtil';
// import ToastUtil from './ToastUtil';

const axiosInstance = axios.create({
  baseURL: Constants.SERVER_HOST,
  paramsSerializer: params => qs.stringify(params, { allowdots: true }),
});

const axiosUtil = (() => {
  const request = {
    /**
     * axios get method 호출
     * @param {string} url
     * @param {object} query
     * @param {boolean} optionAfterProcessing
     */
    async get(url, query = {}, optionAfterProcessing = true) {
      SpinnerUtil.spin();
      const config = request._getConfig({ params: query });
      const result = optionAfterProcessing
        ? await request._resolvePromise(axiosInstance.get(url, config))
        : await axiosInstance.get(url, config).catch((err) => {
          request._error(err, true);
        });
      SpinnerUtil.unspin();
      return result;
    },
    /**
     * axios post method 호출
     * @param {string} url
     * @param {object} payload
     * @param {boolean} optionAfterProcessing
     */
    async post(url, payload = {}, optionAfterProcessing = true) {
      SpinnerUtil.spin();
      const config = request._getConfig();
      const result = optionAfterProcessing
        ? await request._resolvePromise(axiosInstance.post(url, payload, config))
        : await axiosInstance.post(url, payload, config).catch((err) => {
          request._error(err, true);
        });
      SpinnerUtil.unspin();
      return result;
    },
    /**
     * axios put method 호출
     * @param {string} url
     * @param {object} payload
     * @param {boolean} optionAfterProcessing
     */
    async put(url, payload = {}, optionAfterProcessing = true) {
      SpinnerUtil.spin();
      const config = request._getConfig();
      const result = optionAfterProcessing
        ? await request._resolvePromise(axiosInstance.put(url, payload, config))
        : await axiosInstance.put(url, payload, config).catch((err) => {
          request._error(err, true);
        });
      SpinnerUtil.unspin();
      return result;
    },
    /**
     * axios delete method 호출
     * @param {string} url
     * @param {object} query
     * @param {boolean} optionAfterProcessing
     */
    async delete(url, query = {}, optionAfterProcessing = true) {
      SpinnerUtil.spin();
      const config = request._getConfig({ params: query });
      const result = optionAfterProcessing
        ? await request._resolvePromise(axiosInstance.delete(url, config))
        : await axiosInstance.delete(url, config).catch((err) => {
          request._error(err, true);
        });
      SpinnerUtil.unspin();
      return result;
    },
    /**
     * axios error 처리
     * @param {object} err
     * @param {boolean} withoutAlert
     */
    _error(err, withoutAlert) {
      SpinnerUtil.unspin();
      const errorMessage = err.response ? err.response.data.message : err.message;
      if (!withoutAlert) {
        // ToastUtil.showOrHideToast(errorMessage, true, 'caution');
        alert(errorMessage);
        throw new Error(errorMessage);
      }
    },
    /**
     * axios config 설정 (헤더)
     * @param {object} properties
     */
    _getConfig(properties = {}) {
      const config = {
        headers: {
          'x-auth-token': sessionStorage.getItem(Constants.TOKEN) || '',
        },
      };
      return Object.assign(config, properties);
    },
    /**
     * axios 요청 promise 처리 (token 저장 및 제거)
     * @param {object} promise
     */
    _resolvePromise(promise) {
      return promise
        .then((response) => {
          if (response.headers[Constants.TOKEN_HEADER]) {
            sessionStorage.setItem(Constants.TOKEN, response.headers[Constants.TOKEN_HEADER]);
          }
          return response;
        })
        .catch((err) => {
          const token = err.response.headers[Constants.TOKEN_HEADER];
          request._error(err);
          if (token) {
            sessionStorage.setItem(Constants.TOKEN, token);
            return;
          }
          sessionStorage.removeItem(Constants.TOKEN);
        });
    },
  };

  const result = {
    get: request.get,
    post: request.post,
    put: request.put,
    delete: request.delete,
  };
  return result;
})();

export default axiosUtil;
