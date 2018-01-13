const rp = require('request-promise');

const endpoint = _ =>
  rp('https://now.dining.cornell.edu/api/1.0/dining/eateries.json')
  /** All good in the meta? Return the eatery array */
    .then(body => {
      const obj = JSON.parse(body);
      if (obj.status != 'success') throw new Error('API reported failure');
      return obj.data.eateries;
    });

/** Exports **/

module.exports = {
  endpoint,
};
