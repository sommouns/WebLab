import Storage from 'web-storage-cache'

const localStorage = new Storage()

// primary
export const getLocalStorage = (key) => localStorage.get(key)
export const setLocalStorage = (key, val) => localStorage.set(key, val)

export const setToken = (token) => {
    setLocalStorage('token', token)
}
export const getToken = () => getLocalStorage('token')

export const saveUserInfomation = (userinfo) => {
    setLocalStorage('userInfo', userinfo)
}
export const getUserInfomation = () => getLocalStorage('userInfo')