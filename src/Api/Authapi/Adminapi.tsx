import axios from "axios"

const url = "http://braashms.test/api/v1"

export const AdminLogin = async (admin: any) => {
    return await axios.post(`${url}/auth/login`, admin).then((res) => res.data)
}