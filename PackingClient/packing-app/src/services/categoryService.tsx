import axios from "axios"
// import data from '../cat.json';
export default new class CategoryService {
    getAll() {
     
       return axios.get('../cat.json').then((response)=>{
       return response.data
        })
      
    
    }
}