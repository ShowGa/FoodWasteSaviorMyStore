import axios from "axios";

const API_URL = "http://localhost:8080/api-mystore/packages";

class PackageService {
  getPackageList() {
    const token = JSON.parse(localStorage.getItem("auth-mystore-jwt"));

    return axios.get(API_URL + "/getallpackagelist", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
