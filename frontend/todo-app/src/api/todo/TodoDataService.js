import axios from 'axios'
class TodoDataService {
    retriveAllTodos(Name) {
        return axios.get(`http://localhost:8080/Users/${Name}/todos`);
    }
    deleteTodo(name,id){
        console.log(id+" " +name)
         let res =  axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
         return res;
    }
}
export default new TodoDataService()