import axios from "axios"


export default new class UserService {
    getAll() {
     
       return axios.get('../cat.json').then((response)=>{
       return response.data
        })
    }
    getUserByPassword(pass:string){
        return axios.get('/'+pass).then((res)=>{
            if(res.status==200)
            return res.data
            return null
        })
    }
}