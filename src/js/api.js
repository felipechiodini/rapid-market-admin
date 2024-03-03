import axios from 'axios'
import { useUserStore } from '@/stores/user'
import router from '@/router'

export const request = () => {
  const request = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })

  request.interceptors.request.use(request => {
    const userStore = useUserStore()

    if (userStore.token) {
      request.headers.Authorization = 'Bearer ' + userStore.token
    }

    return request
  }, (error) => Promise.reject(error))

  return request
}

export const requesFromStore = () => {
  const request = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/${router.currentRoute.value.params.slug}`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })

  request.interceptors.request.use(request => {
    const userStore = useUserStore()

    if (userStore.token) {
      request.headers.Authorization = 'Bearer ' + userStore.token
    }

    return request
  }, (error) => Promise.reject(error))

  return request
}