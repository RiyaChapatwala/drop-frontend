import axios from "axios";
import { API } from "../Constant";

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
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
    );
  };

  updateUser = async (data) => {
    return new Promise((resolve, reject) =>
      axios
        .patch(`${API}/user`, { language: data })
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => reject(error))
    );
  };
}

export default new AuthService();
