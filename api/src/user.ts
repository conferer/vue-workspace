import api from './module/api'

export const userApi = {
  createUser: (data: Record<string, any>) => api.post('/api/users', data),
}

export const userRoleAPi = {
  createRole: (data: Record<string, any>) => api.post('/api/users/roles', data),
}
