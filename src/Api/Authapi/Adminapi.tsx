import axios from "axios"

const url = "https://braas.duraen.com/api/v1"

export const AdminLogin = async (admin: any) => {
    return await axios.post(`${url}/auth/login`, admin).then((res) => res.data)
}