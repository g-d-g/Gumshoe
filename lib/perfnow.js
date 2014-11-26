  /**
   * @file perfnow is a 0.14 kb window.performance.now high resolution timer polyfill with Date fallback
   * @author Daniel Lamb <dlamb.open.source@gmail.com>
   */
  (function perfnow (window) {
    // make sure we have an object to work with
    if (!('performance' in window)) {
      window.performance = {};
    }
    var perf = window.performance;
    // handle vendor prefixing
    window.performance.now = perf.now ||
      perf.mozNow ||
      perf.msNow ||
      perf.oNow ||
      perf.webkitNow ||
      // fallback to Date
      Date.now || function () {
        return new Date().getTime();
      };
  })(window);