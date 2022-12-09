import axios from 'axios'
class TodoDataService{
    retriveAllTodos(Name){
    return axios.get(`http://localhost:8080/Users/${Name}/todos`);
}
}
export default new TodoDataService()