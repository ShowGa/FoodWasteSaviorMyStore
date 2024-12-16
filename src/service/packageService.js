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

  // get package detail full (Overview, Schedule)
  getPackageDetail(packageId) {
    const token = JSON.parse(localStorage.getItem("auth-mystore-jwt"));

    return axios.get(API_URL + `/packagedetailfull/${packageId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getPackageSchedule(packageId) {
    const token = JSON.parse(localStorage.getItem("auth-mystore-jwt"));

    return axios.get(API_URL + `/packageschedule/${packageId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getPackageOverview(packageId) {
    const token = JSON.parse(localStorage.getItem("auth-mystore-jwt"));

    return axios.get(API_URL + `/packageoverview/${packageId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  updatePackageOverview(packageId, formData) {
    const token = JSON.parse(localStorage.getItem("auth-mystore-jwt"));

    return axios.post(
      API_URL + `/updatepackageoverview/${packageId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  // update package schedule
  updatePackageSchedule(rulesId, formData) {
    const token = JSON.parse(localStorage.getItem("auth-mystore-jwt"));

    return axios.post(API_URL + `/updatepackageschedule/${rulesId}`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

export default new PackageService();
