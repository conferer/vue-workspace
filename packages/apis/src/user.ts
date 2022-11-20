import api from './module/api'
import qs from 'qs'

export const userApi = {
  getUser: (id: number) => api.get(`/api/users/${id}`),
  createUser: (data: Record<string, any>) => api.post('/api/users', data),
  updateUser: (data: Record<string, any>) => api.put('/api/users', data),
  deleteUser: (id: number) => api.delete(`/api/users/${id}`),
  searchUsers: (data: Record<string, any>) => api.post('/api/users/search', data),
  login: (data: any) =>
    api.post('/api/login', qs.stringify(data), {
      headers: {
        accept: 'application/json',
        'accept-language': 'UTF-8',
        'content-type': 'application/x-www-form-urlencoded',
      },
    }),
  logout: () => api.post('/api/logout'),
}

export const userRoleAPi = {
  createRole: (data: Record<string, any>) => api.post('/api/users/roles', data),
}
