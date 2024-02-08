import axios from 'axios'

export const request = (slug) => {
  return axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/${slug}`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
}