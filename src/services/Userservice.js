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
        })
    );
  }
  async getCustomerByPhone(mobileNo) {
    return new Promise((resolve, reject) =>
      axios
        .get(`${API}/user/customer?mobileNo=${mobileNo}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    );
  }
  async getCustomerById(id) {
    return new Promise((resolve, reject) =>
      axios
        .get(`${API}/user/customer/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    );
  }
}
export default new Userservice();
