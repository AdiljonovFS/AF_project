import axios from "./api"


const AuthService = {
    async login(email, password) {
        // API call to login
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