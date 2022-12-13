import axios from 'axios'
class TodoDataService {
    retriveAllTodos(Name) {
        return axios.get(`http://localhost:8080/Users/${Name}/todos`);
    }
    deleteTodo(Name,id){
        console.log(id+" " +Name)
        return axios.delete(`http://localhost:8080/users/${Name}/todos/${id}`)
    }
}
export default new TodoDataService()