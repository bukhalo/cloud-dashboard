const axios = require('axios')
const consola = require('consola')

module.exports = {
  Query: {
    user: async () => {
      try {
        const bill = await axios.get(process.env.BILLING_ENDPOINT, {
          params: {
            out: 'bjson',
            auth: '',
            func: 'desktop'
          }
        })

        if (!bill.data.error) {
          const sid = bill.data.model.auth
          res.cookie('sid', sid, {
            expires: new Date(new Date().getTime() + 60 * 60 * 1000), // one hour
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development'
          })
          return { sid }
        } else {
          consola.error(bill.data.error)
          throw new Error(bill.data.error.msg)
        }
      } catch (e) {
        consola.error(e)
        throw new Error(e)
      }
    }
  }
}
