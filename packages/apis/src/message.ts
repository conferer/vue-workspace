import api from './module/api'

export const messageApi = {
  create: (data: Record<string, any>) => api.post('/api/messages', data),
  update: (data: Record<string, any>) => api.put(`/api/messages/${data.id}`, data),
  get: (id: number) => api.get(`/api/messages/${id}`),
  search: (data: Record<string, any>) => api.post('/api/messages', data),
}
