import axios from "axios";
import { API } from "../Constant";
import jwtDecode from "jwt-decode";

class AuthService {
  checkAuth = async () =>
    new Promise((resolve, reject) => {
      const token = this.getAccessToken();
      const refresh_token = this.getRefreshToken();
      const data = this.getUserData();
      console.log("check", data);

      if (this.isAuthTokenValid(token) && data) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        resolve({
          access_token: token,
          refresh_token,
          user: data,
        });
      } else {
        reject(Error("Login Failed"));
      }
    });

  signInWithGoogle = async (googleToken) => {
    return new Promise((resolve, reject) =>
      axios
        .post(`${API}/user/auth/google`, { googleToken })
        .then((response) => {
          console.log(response, "google");
          this.setAccessToken(response.data?.data?.access_token);
          this.setRefreshToken(response.data?.data?.refresh_token);
          this.setUserData(response.data?.data?.user);
          resolve(response.data.data);
        })
        .catch((error) => {
          reject(error);
        })
    );
  };

  isAuthTokenValid = (access_token) => {
    if (!access_token) {
      return false;
    }
    const decoded = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn("access token expired");
      return false;
    }

    return true;
  };

  setAccessToken = (accessToken) => {
    localStorage.setItem("AccessToken", accessToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  };

  getAccessToken = () => {
    return localStorage.getItem("AccessToken") || "";
  };

  setRefreshToken = (refreshToken) => {
    localStorage.setItem("RefreshToken", refreshToken);
  };

  getRefreshToken = () => {
    return localStorage.getItem("RefreshToken") || "";
  };

  setUserData = (user) => {
    localStorage.setItem("User", JSON.stringify(user));
  };

  getUserData = () => {
    return JSON.parse(localStorage.getItem("User") || "");
  };

  updateUser = async (data) => {
    return new Promise((resolve, reject) =>
      axios
        .patch(`${API}/user`, data)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => reject(error))
    );
  };

  async createAccount(data) {
    return new Promise((resolve, reject) =>
      axios
        .post(`${API}/user/account`, data)
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

export default new AuthService();
