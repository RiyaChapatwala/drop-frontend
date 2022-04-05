import axios from "axios";
import { API } from "../Constant";

class Mediaservice {
  uploadMedia = async (data) => {
    return new Promise((resolve, reject) =>
      axios
        .post(`${API}/media/upload`, data)
        .then((response) => {
          resolve(response.data.data);
        })
        .catch((error) => reject(error))
    );
  };
}
export default new Mediaservice();
