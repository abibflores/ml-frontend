import axios from "axios";

export const search = ({ queryKey = [] }) => {
  const [, name = ""] = queryKey;

  if (!name) {
    return [];
  }

  return axios
    .get(`https://hidden-shore-71099.herokuapp.com/api/search?query=${name}`)
    .then((res) => {
      const productList = res?.data?.results;
      return productList;
    })
    .catch((error) => {
      console.log("error", error);
    });
};