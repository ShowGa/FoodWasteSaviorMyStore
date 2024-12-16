import axios from "axios";

const API_URL = "http://localhost:8080/api-mystore/auth";

class AuthService {
  firebaseGoogleOAuth(data) {
    return axios.post(API_URL + "/googleoauth-register", data, {
      withCredentials: true,
    });
  }

  firebaseGoogleOAuthLogin(idToken) {
    return axios.get(API_URL + "/googleoauth-login", {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
  }
}

export default new AuthService();
