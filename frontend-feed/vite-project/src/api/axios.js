import axios from 'axios'

const instance = axios.create({
    baseURL: "https://friendly-jade-smock.cyclic.app",
})

export default instance