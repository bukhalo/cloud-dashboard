const axios = require('axios')

const billing = axios.create({
  baseURL: process.env.BILLING_ENDPOINT
})

module.exports = billing
