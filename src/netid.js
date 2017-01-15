let Plant   = require('plant.js');
let browser = new Plant();

/** Takes DOM for a person page, returns info object */
let extract_single_result = ($) => {

  let name = $("#peoplename").text()
    .replace('vCard', '') // clean up
    .replace(/\t+/g, '')  // clean up
    .split('\n')
    .filter((l) => l !== '')[0]

  let info = $("#generalinfo").text()
    .replace(/\t+/g, '')
    .split('\n')
    .filter((l) => l !== '')
    .reduce((acc, x) => {
      if (!acc['$']) {
        acc['$'] = x.toLowerCase().replace(':', '');
      } else {
        acc[acc['$']] = x;
        delete acc['$']
      }
      return acc;
    }, {name: name});

  return info;
}

/** Takes DOM for a search results page, returns info object list */
let extract_search_results = ($) => {

  var res = []

  $('.results').each(function (i, elem) {

    let type = $(this).find('caption').text().replace(/\([0-9]+\)/, '');
    // each table: students, alumni, staff, etc
    let info = $(this).find('tbody').text().replace(/(  )+/g, '')
      .split('\n')
      .filter(l => l !== '\r' && l !== ' \r' && l !== '')
      .map(l => l.replace('\r', '').split(':'))
      .reduce((acc, x) => {
        if (x.length == 1) {
          acc.unshift({});
          acc[0].name = x[0];
          acc[0].type = type;
        }
        else {
          acc[0][x[0].toLowerCase()] = x[1].trim()
        }
        return acc;
      }, []);

    res = res.concat(info)
  });

  return res;

}

module.exports = {
  search: (query) => browser
  .get('http://www.cornell.edu/search/people.cfm?q=' + query + '&tab=people')
  .then(($) =>

    ($('#people-results').find("#searchresults").length == 0)
      ? extract_search_results($)  // Search results page -> extract all results from it
      : [extract_single_result($)] // Straight to the info page; only one result

  )
}

/*
[ { name: 'Seunghee S. Ha',
    type: 'Alumni ',
    email: 'ssh17@cornell.edu',
    netid: 'ssh17' }, ... ]
 */