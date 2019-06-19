const ovh = require('ovh')

const ovhEu = ovh({
  appKey: process.env.OVH_EU_APP_KEY,
  appSecret: process.env.OVH_EU_APP_SECRET,
  consumerKey: process.env.OVH_EU_CONSUMER_KEY
})

module.exports = ovhEu
