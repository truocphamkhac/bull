'use strict';

const os = require('os');
const LOW_MEMORY_LIMIT = process.env.LOW_MEMORY_LIMIT || 0.2;

console.log('[worker]', 'LOW_MEMORY_LIMIT', 'SETTINGS', LOW_MEMORY_LIMIT);

/**
 * Expose.
 */
module.exports = {
  /**
   * Check if the memory of this machine is good enough to continue scraping or not.
   */
  isLowMemory: function () {
    const freemem = os.freemem();
    const totalmem = os.totalmem();

    if (freemem / totalmem < LOW_MEMORY_LIMIT) {
      return true;
    }

    return false;
  }
};
