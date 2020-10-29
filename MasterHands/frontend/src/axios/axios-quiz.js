import axios from 'axios'

export default axios.create({
  baseURL: 'http://77.222.63.249',
})

const cancelToken = axios.CancelToken;
export const source = cancelToken.source();