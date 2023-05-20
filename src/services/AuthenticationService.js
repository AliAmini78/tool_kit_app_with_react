import axios from "axios";

export default class AuthenticationService {
    login(username, password) {
      // make an API call to authenticate the user
      return axios.post('/api/auth/login', {
        username,
        password
      });
    }
  
    logout() {
      // clear the user session and redirect to the login page
      sessionStorage.removeItem('currentUser');
      window.location.href = '/login';
    }
  
    getCurrentUser() {
      // get the current user from the user session
      return JSON.parse(sessionStorage.getItem('currentUser'));
    }
  }
  