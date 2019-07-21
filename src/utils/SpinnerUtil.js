/**
 * Spinner util
 */
export default (() => {
  let spinner; // Spinner vue component
  /**
   * Set spinner
   * @param {VueComponent} el
   */
  const setSpinner = (el) => { spinner = el; };
  // Remove Spinner
  const removeSpinner = () => { spinner = null; };
  // Show spinner
  const spin = () => { spinner.show(); };
  // Hide spinner
  const unspin = () => { spinner.hide(); };

  return {
    setSpinner,
    removeSpinner,
    spin,
    unspin
  };
})();
