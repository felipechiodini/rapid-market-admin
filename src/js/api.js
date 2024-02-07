import Axios from 'axios'
import Router from '@/router'
import { useUserStore } from '@/stores/user'

const Api = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

Api.interceptors.request.use(request => {
  const userStore = useUserStore()
  request.headers.Authorization = 'Bearer ' + userStore.token

  return request
}, function (error) {
  return Promise.reject(error)
})

Api.interceptors.response.use(function (response) {
  return response
}, function (error) {
  try {
    if (error.response.status === 401) {
      localStorage.clear()
      Router.push({ name: 'auth.login' })
    }
  
    if (error.response.status === 503) {
      Router.push({ name: 'maintenance' })
    }
  } catch (error) {
    console.log(error)    
  }

  return Promise.reject(error)
})

export default Api