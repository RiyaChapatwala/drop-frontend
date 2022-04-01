import axios from "axios";
import { API } from "../Constant";

class AuthService {

    signInWithGoogle = async (googleToken) => {
        return new Promise((resolve, reject) =>
            axios
                .post(`${API}/user/auth/google`, { googleToken })
                .then((response) => {
                    // this.setAccessToken(response.data.access_token);
                    // this.setRefreshToken(response.data.refresh_token);
                    // this.setUserData(response.data.user);
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                })
        );
    };
}

export default new AuthService();