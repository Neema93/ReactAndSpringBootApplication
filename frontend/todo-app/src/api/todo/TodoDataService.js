import axios from 'axios'
class TodoDataService {
    retriveAllTodos(Name) {
        return axios.get(`http://localhost:8080/users/${Name}/todos`);
    }
    retrieveTodo(name,id) {
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    }
    deleteTodo(name,id){
        console.log(id+" " +name)
         let res =  axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
         return res;
    }
    updateTodo(name,id,todo){
        console.log(id+" " +name)
         let res =  axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
         return res;
    }
    createTodo(name,id,todo){
        console.log(id+" " +name)
         let res =  axios.post(`http://localhost:8080/users/${name}/todos`, todo);
         return res;
    }
}
export default new TodoDataService()