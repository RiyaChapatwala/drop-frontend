import axios from "axios";
import { API } from "../Constant";

class Societyservice {
  async createSociety(data) {
    return new Promise((resolve, reject) =>
      axios
        .post(`${API}/society`, data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    );
  }
  async getSocietyByUser() {
    return new Promise((resolve, reject) =>
      axios
        .get(`${API}/society`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    );
  }
  async getAllSociety() {
    return new Promise((resolve, reject) =>
      axios
        .get(`${API}/society/all`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    );
  }
  async getAllWing(societyID) {
    return new Promise((resolve, reject) =>
      axios
        .get(`${API}/society/wing/${societyID}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    );
  }
}
export default new Societyservice();
