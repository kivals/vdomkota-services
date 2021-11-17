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

const getCatByAlias = (alias) => {
  return axios.get(`/api/cat/${alias}`).then((response) => {
    const cat = response.data[0];
    cat.photos = cat.photos.map((photo) => `${photo.path}.jpg`);
    return cat;
  });
};

export default {
  getListOfCats,
  getCatByAlias,
};
