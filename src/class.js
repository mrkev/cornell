const rp = require('request-promise')
const lib = require('../lib/common')
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

const search = query => Promise.resolve(query)
  .then(query => { query.search = query.search || ''; return query })
  .then(query => {
    if (!query.roster) return rosters()
      .then(rosters => rosters.filter(rost => rost.current)[0].slug)
      .then(slug => { query.roster = slug; return query })
    else return query
  })
  .then(query => {
    query.subject = query.subjects || query.subject
    if (!query.subject) return subjects(query.roster)
      .then(subjects => subjects.map(subj => subj.slug))
      .then(subjects => { query.subject = subjects; return query })
    if (Array.isArray(query.subject)) return query;
    else {
     query.subject = [query.subject]; return query
    }
  })
  .then(query => query.subject.map(subject => `https://classes.cornell.edu/api/2.0/search/classes.json?roster=${query.roster}&subject=${subject}&q=${query.search}`))
  .then(urls => urls.map(url => rp(url).catch(e => null)))
  .then(requests => Promise.all(requests))
  .then(bodies => bodies
    .map(body => body && JSON.parse(body).data.classes)
    .filter(classes => classes && classes.length > 0)
    .reduce((acc, clss) => acc.concat(clss)))

module.exports = {
  subjects,
  rosters,
  search,
}
