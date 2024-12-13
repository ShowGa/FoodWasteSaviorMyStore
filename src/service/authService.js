import axios from "axios";

const API_URL = "http://localhost:8080/api-mystore/auth";

class AuthService {
  firebaseGoogleOAuth(data) {
    return axios.post(API_URL + "/googleoauth-register", data, {
      withCredentials: true,
    });
  }
}

export default new AuthService();
