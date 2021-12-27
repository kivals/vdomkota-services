import http from "@/api/http";

/**
 * GET запрос на получения списка котов
 */
export const getCats = async () => {
  const cats = await http({
    url: "/cats/base",
    method: "get",
  });
  if (Array.isArray(cats)) {
    // Нормализируем объект для передачи в компонент
    return cats.map((cat) => {
      return {
        ...cat,
        photo: `${cat.photos[0].path}.jpg`,
      };
    });
  }
  return [];
};

/**
 * GET запрос на получение кота по alias
 * @param alias
 */
export const getCatByAlias = async (alias) => {
  const cat = await http({
    url: `/cats/${alias}`,
    method: "get",
  });
  if (cat && Array.isArray(cat.photos)) {
    // Нормализируем объект для передачи в компонент
    cat.photos = cat.photos.map((photo) => ({
      ...photo,
      path: `${photo.path}.jpg`,
    }));
    return cat;
  }
  return null;
};

export const updateCat = (alias, data) => {
  return http({
    url: `/cats/${alias}`,
    method: "put",
    data,
  });
};

/**
 * Отправить запрос на создание новых фоток
 * @param alias alias кота
 * @param photos файлы фоток для сохранения
 */
export const createPhotosCat = (alias, photos) => {
  const formData = new FormData();
  formData.append("alias", alias);
  photos.forEach((img) => {
    formData.append("files", img);
  });
  return http({
    url: `/photos/upload`,
    method: "post",
    data: formData,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
};
