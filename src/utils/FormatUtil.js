/* eslint-disable */
/**
 * Date formatter
 */
export default (() => {
  /**
   * Convert param to string and add padding 0 in empty digits
   *
   * @param {number} time
   * @return {string} padded time (ex. 1 => 01)
   */
  const paddingZero = (time) => ('' + time).padStart(2, '0');
  /**
   * Convert timestamp to formatted date time (yyyy/MM/dd HH:MM)
   * 
   * @param {number} timestamp
   * @return {string} formatted date
   */
  const formatDateTime = (timestamp) => {
    const dateObj = new Date(timestamp);
    const year = '' + dateObj.getFullYear();
    const month = paddingZero(dateObj.getMonth() + 1);
    const date = paddingZero(dateObj.getDate());
    const hour = paddingZero(dateObj.getHours());
    const min = paddingZero(dateObj.getMinutes());
    return `${year}년 ${month}월 ${date}일 ${hour}시 ${min}분`;
  };

    /**
   * Convert timestamp to formatted date (yyyy/MM/dd)
   * 
   * @param {number} timestamp
   * @return {string} formatted date
   */
  const formatDate = (timestamp) => {
    const dateObj = new Date(timestamp);
    const year = '' + dateObj.getFullYear();
    const month = paddingZero(dateObj.getMonth() + 1);
    const date = paddingZero(dateObj.getDate());
    return `${year}년 ${month}월 ${date}일`;
  };

  return { formatDateTime, formatDate };
})();
