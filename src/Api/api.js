import Axios from "axios";
const instance = Axios.create({
  baseURL: "https://boiling-refuge-66454.herokuapp.com/images",
  timeout: 5000
});

export const api = {
  getPhotos() {
    return instance.get(``).then(response => response.data);
  },
  getPhotoData(id) {
    return instance.get(`/${id}`).then(response => response.data);
  },
  setComment(id, comment) {
    return instance
      .post(`/${id}//comments`, comment)
      .then(response => response.data);
  }
};
