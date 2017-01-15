const rp = require('request-promise')

const rosters = _ =>
  rp('https://classes.cornell.edu/api/2.0/config/rosters.json')
  .then(body => JSON.parse(body).data.rosters.map(rost => ({
      slug  : rost.slug,                           // eg. FA16
      descr : rost.descr,                          // eg. Fall 2016
      current : rost.isDefaultRoster === "Y",      // true if current roster
      modified : new Date(rost.lastModifiedDttm),  // last modified
    }))
  )

const subjects = roster => (roster
    ? Promise.resolve(roster)
    : rosters() // if we are given no roster, get the latest one
    .then(rosters => rosters.filter(rost => rost.current)[0].slug))
  .then(rslug => rp(`https://classes.cornell.edu/api/2.0/config/subjects.json?roster=${rslug}`))
  .then(body => JSON.parse(body).data.subjects.map(subj => ({
      slug : subj.value,
      descr : subj.descr
    }))
  )


module.exports = {
  subjects,
  rosters
}
