const csvjson = require('csv-parse');
const request = require('request-promise');

const parse_coords = str => {
  const [latitude, longitude] = str.split(',').map(parseFloat);
  return { latitude, longitude };
};

// @return array of labs
const labs = () =>
  request('https://mapping.cit.cornell.edu/publiclabs/map/results_as_csv.cfm')
    .then(csv => new Promise((res, rej) => {
      csvjson(csv, (err, output) => {
        if (err) rej(err);
        res(output.map(x => ({
          id: parseInt(x[0]),
          created: new Date(x[1]),
          updated: new Date(x[2]),
          name: x[3],
          location: x[5],
          coordinates: parse_coords(x[6]),
          resources: x[7].split(','),
        })));
      });
    })
  );

module.exports = { labs };
