import axios from "axios";
import { API } from "../Constant";

class BusinessService {
  async getBusinessType() {
    return new Promise((resolve, reject) =>
      axios
        .get(`${API}/lookup/business-type`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    );
  }
  async getBusinessByUser() {
    return new Promise((resolve, reject) =>
      axios
        .get(`${API}/business`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    );
  }

  async getBusiness() {
    return new Promise((resolve, reject) =>
      axios
        .get(`${API}/business`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    );
  }

  async getDelivery(societyId) {
    return new Promise((resolve, reject) =>
      axios
        .get(`${API}/business/customer/today/${societyId}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    );
  }

  async getCustomerBySociety(id, wing) {
    return new Promise((resolve, reject) =>
      axios
        .get(`${API}/business/customer/${id}?wing=${wing}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    );
  }

  async getCustomerDetails(id) {
    return new Promise((resolve, reject) =>
      axios
        .get(`${API}/business/customer/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
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
        })
    );
  }

  async createCustomer(data) {
    return new Promise((resolve, reject) =>
      axios
        .post(`${API}/business/customer`, data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    );
  }

  async createDelievery(data) {
    return new Promise((resolve, reject) =>
      axios
        .post(`${API}/business/delivery`, data)
        .then((response) => {
          console.log(response, "delievery");
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    );
  }

  async editBusiness(data) {
    return new Promise((resolve, reject) =>
      axios
        .patch(`${API}/business`, data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    );
  }
}
export default new BusinessService();
