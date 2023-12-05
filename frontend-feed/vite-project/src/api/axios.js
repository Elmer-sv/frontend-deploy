import axios from 'axios'

const instance = axios.create({
    baseURL: "https://friendly-jade-smock.cyclic.app",
    withCredentials: true,
})

export default instance