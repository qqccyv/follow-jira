export interface User {
  id: string,
  name: string,
  email: string,
  title: string,
  organization: string,
  token: string
}
const baseurl = process.env.REACT_APP_API_URL;
const localStorageKey = '__auth_provider_token__';
export const getToken = () => {
  return window.localStorage.getItem(localStorageKey)
}
export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token)
  return user
}
export const login = (data: { username: string, password: string }) => {
  return fetch(`${baseurl}/login`, {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then((res) => {
    return res.json()
  }).then((data) => {
    console.log(data)
    if (data.ok) {
      return handleUserResponse(data)
    } else {
      return Promise.reject(data)
    }
  })
}
export const register = (data: { username: string, password: string }) => {
  return fetch(`${baseurl}/register`, {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then((res) => {
    return res.json()
  }).then((data) => {
    console.log(data)
    if (data.ok) {
      return handleUserResponse(data)
    } else {
      return Promise.reject(data)
    }
  })
}

export const logout = async () => {
  window.localStorage.removeItem(localStorageKey)
}
