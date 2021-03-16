import axios from 'axios'

const instance = axios.create({ baseURL: '/api' })

export const getHello = async (): Promise<{ name: string }> => {
  const { data } = await instance.get('/hello')

  return data
}
