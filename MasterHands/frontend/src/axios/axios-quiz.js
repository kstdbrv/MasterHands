import axios from 'axios'

export default axios.create({
  baseURL: 'https://mastershands.ru'
})

const cancelToken = axios.CancelToken;
export const source = cancelToken.source();