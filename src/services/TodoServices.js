import axios from "axios";
import BaseRouteService from "./BaseRouteService";

export default class TodoServices extends BaseRouteService {
  getAllTodo() {
    return axios.get(this.baseUrl + "todo");
  }

  getTodoById(id) {
    // make an API call to fetch a single product by ID
    return axios.get(this.baseUrl + `todo/${id}`);
  }

  createTodo(todo) {
    // make an API call to create a new product
    return axios.post(this.baseUrl + "todo", todo);
  }

  updateTodo(id, todo) {
    // make an API call to update an existing product
    return axios.put(this.baseUrl + `todo/${id}`, todo);
  }

  deleteTodo(id) {
    // make an API call to delete a product by ID
    return axios.delete(this.baseUrl + `todo/${id}`);
  }
}
