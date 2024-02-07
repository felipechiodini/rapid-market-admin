import axios from 'axios'
import { useRoute } from 'vue-router'

export const request = () => {
  const route = useRoute()

  return axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/${route.params.slug}`,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
} 