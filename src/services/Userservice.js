import { API } from "../Constant";
import axios from "axios";

class Userservice {
  async getLanguage() {
    return new Promise((resolve, reject) =>
      axios
        .get(`${API}/lookup/language`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
          console.log("error");
        })
    );
  }
  async getBusinessType() {
    return new Promise((resolve, reject) =>
      axios
        .get(`${API}/lookup/business-type`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
          console.log("error");
        })
    );
  }

  async createBusiness(data) {
    return new Promise((resolve, reject) =>
      axios
        .post(`${API}/business`, data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
          console.log("error");
        })
    );
  }
}
export default new Userservice();
