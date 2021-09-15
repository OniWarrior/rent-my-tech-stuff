import axios from "axios";

const AxiosWithAuth=()=>{
    return axios.create({
        baseURL:'',
        headers:{
            authorization:localStorage.getItem("token")
        }
    })

}

export default AxiosWithAuth