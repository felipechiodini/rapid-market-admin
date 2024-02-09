import axios from 'axios'

export const request = (slug, onError = null) => {
  
  
  const request = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/${slug}`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })

  if (onError) {
    request.interceptors.response.use(response => response, (error) => onError(error))
  }

  return request
}