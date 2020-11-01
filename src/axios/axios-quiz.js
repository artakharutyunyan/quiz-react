import axios from "axios";

export default axios.create({
  baseURL: "https://quiz-creator-react-app.firebaseio.com/",
});
