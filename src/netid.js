let Plant   = require('plant.js');
let browser = new Plant();

/** Takes DOM for a person page, returns info object */
let extract_single_result = ($) => {

  let name = $('#peoplename').text()
    .replace('vCard', '') // clean up
    .replace(/\t+/g, '')  // clean up
    .split('\n')
    .filter((l) => l !== '')[0];

  let info = $('#generalinfo').text()
    .replace(/\t+/g, '')
    .split('\n')
    .filter((l) => l !== '')
    .reduce((acc, x) => {
      if (!acc['$']) {
        acc['$'] = x.toLowerCase().replace(':', '');
      } else {
        acc[acc['$']] = x;
        delete acc['$'];
      }
      return acc;
    }, {name: name});

  return info;
};

const log = (x, i) => { console.log(x, i); return x;};

/** Takes DOM for a search results page, returns info object list */
let extract_search_results = ($) => {

  const result = [];
  $('.results').each(function (i, elem) {

    const type = $(this).find('caption').text().replace(/\([0-9]+\)/, '');
    // each table: students, alumni, staff, etc
    $(this).find('tbody').children().each(function (i, elem) {
      // each row is a person
      const collected = [];
      $(this).children(function (i) {
        const p = $(this).html()
          // replace all tags with newlines (.text() doesn't preserve <br\>)
          .replace(/<(?:.|\n)*?>/gm, '\n')
          .split('\n').map(x => x.trim())
          .filter(Boolean).join('\n');

        // first is always the name
        if (i === 0) {
          return collected.push({name: p});
        }

        // then we have key: value pairs
        const m = p.match(/(.*):\n(.*)/gm);
        if (!m) { return; }

        const r = m.forEach(x => {
          const [key, value] = x.split(':\n');
          collected.push({[key.toLowerCase()]: value});
        });
      });
      result.push(collected.reduce((a, b) => Object.assign(a, b), {}));
    });
  });
  return result;
};

module.exports = {
  search: (query) => browser
    .get('http://www.cornell.edu/search/people.cfm?q=' + query + '&tab=people')
    .then(($) =>

      ($('#people-results').find('#searchresults').length == 0)
        ? extract_search_results($)  // Search results page -> extract all results from it
        : [extract_single_result($)] // Straight to the info page; only one result

    ),
};

/*
[ { name: 'Seunghee S. Ha',
    type: 'Alumni ',
    email: 'ssh17@cornell.edu',
    netid: 'ssh17' }, ... ]
 */
