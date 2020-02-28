const axios = require('axios')
const apiEndPoint = require('./BaseApi')

class Auth {
    constructor() {
        this.axios = axios.create({
            baseURL: apiEndPoint
        })
    }

    onLogin(username, password) {
        return this.axios.post('/auth/local', {
            identifier: username,
            password: password
        })
    }
}

export default Auth