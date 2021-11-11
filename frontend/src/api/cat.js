import axios from "axios";

const getListOfCats = () => {
  return axios.get(`/api/cat/short-cat-info`).then((response) => {
    const cats = response.data;
    return cats.map((cat) => {
      return {
        ...cat,
        photo: `${cat.photos[0].path}.jpg`,
      };
    });
  });
};

export default {
  getListOfCats,
};
