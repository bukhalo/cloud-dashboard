import consola from 'consola'
import axios from 'axios'
// import Cookies from 'js-cookie'

const getSafe = fn => {
  try {
    return fn()
  } catch (e) {
    return undefined
  }
}

const clientSide = async ({ req, redirect }) => {
  try {
    if (getSafe(() => req.cookies.sid)) {
      const { data } = await axios('http://0.0.0.0:3000/api/billing', {
        params: {
          out: 'JSONdata',
          auth: req.cookies.sid,
          func: 'user'
        }
      })
      if (data.error && data.error.code === 'access') {
        return redirect('/login')
      }
      return redirect('/dashboard')
    } else {
      return redirect('/login')
    }
  } catch (e) {
    consola.error(e)
  }
}

const serverSide = async ({ req, redirect }) => {
  consola.log(`server: ${req.cookies.sid}`)
  if (req.cookies.sid) {
    const { data } = await axios('http://0.0.0.0:3000/api/billing', {
      params: {
        out: 'JSONdata',
        auth: req.cookies.sid,
        func: 'user'
      }
    })
    if (data.error && data.error.code === 'access') {
      return redirect('/login')
    }
    return redirect('/dashboard')
  } else {
    return redirect('/login')
  }
}

export default async ({ req, redirect, isServer }) => {
  try {
    if (!isServer) {
      await clientSide({
        req,
        redirect
      })
    } else {
      await serverSide({
        req,
        redirect
      })
    }
  } catch (e) {
    consola.error(e)
  }
}
