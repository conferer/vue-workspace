import api from './module/api'

export const userApi = {
  getUser: (id: number) => api.get(`/api/users/${id}`),
  createUser: (data: Record<string, any>) => api.post('/api/users', data),
  updateUser: (data: Record<string, any>) => api.put('/api/users', data),
  deleteUser: (id: number) => api.delete(`/api/users/${id}`),
  searchUsers: (data: Record<string, any>) => api.post('/api/users/search', data),
}

export const userRoleAPi = {
  createRole: (data: Record<string, any>) => api.post('/api/users/roles', data),
}
