import Cookies from "js-cookie"


const theToken = 'token'
export function setToken(token) {
    return Cookies.set(theToken, token)
}
export function getToken() {
    return Cookies.get(theToken)
}
export function removeToken() {
    return Cookies.remove(theToken)
}