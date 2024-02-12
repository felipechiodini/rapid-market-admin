import axios from 'axios'
import { useUserStore } from '@/stores/user'

export const request = (slug, onError = null) => {
  const request = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/${slug}`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })

  request.interceptors.request.use(request => {
    const userStore = useUserStore()
    request.headers.Authorization = 'Bearer ' + userStore.token

    return request
  }, (error) => Promise.reject(error))

  if (onError) {
    request.interceptors.response.use(response => response, (error) => onError(error))
  }

  return request
}