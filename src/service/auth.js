import axios from "./api"


const AuthService = {
    async login(user) {
        const response = await axios.post('/users/login', {user})
        return response.data 
    },
    async register(user) {
        const response = await axios.post('/users', {user})
        return response.data 
    },
    async getUser() {
        // API call to logout
    }

}
export default AuthService;