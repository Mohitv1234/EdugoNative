import axios from "axios";
import { getData } from "../Slice/Slice";

const HelperFunction = {
  fetchData: (url, name) => async (dispatch) => {
    try {
      const response = await axios.get(url);
      dispatch(getData({ data: response.data.data, name }));
    } catch (error) {
      console.log(error);
    }
  },
  postData: (url, data, name) => async (dispatch) => {
    try {
      const response = await axios.post(url, data);
      dispatch(getData({ data: response.data, name }));
    } catch (error) {
      console.log(error);
    }
  },
};

export default HelperFunction;
