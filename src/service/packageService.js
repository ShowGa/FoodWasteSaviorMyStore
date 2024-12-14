import axios from "axios";

const API_URL = "http://localhost:8080/api-mystore/packages";

class PackageService {
  getPackageList() {
    return axios.get(API_URL + "/list");
  }

  // set auth header
  createPackage() {
    const token = JSON.parse(localStorage.getItem("auth-mystore-jwt"));

    return axios.get(API_URL + "/create", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new PackageService();
