import axios from "axios";

const getBaseCatInfo = () => {
  return axios.get(`/api/cats/base`).then((response) => {
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
  return axios.get(`/api/cats/${alias}`).then(({ data }) => {
    data.photos = data.photos.map((photo) => ({
      ...photo,
      path: `${photo.path}.jpg`,
    }));
    return data;
  });
};

const updateCat = (alias, { name, age, info, characteristics }) => {
  return axios
    .put(`/api/cats/${alias}`, {
      name,
      age,
      info,
      characteristics,
      other: "gogogogo",
    })
    .then((response) => {
      console.log(response);
    });
};

export default {
  getBaseCatInfo,
  getCatByAlias,
  updateCat,
};
