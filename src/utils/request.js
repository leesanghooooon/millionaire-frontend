import axios from 'axios'

const service = axios.create({
  baseURL: '',
  headers: {},
  timeout: 5000
})

export default service
