import CyrillicToTranslit from "cyrillic-to-translit-js";

export const translit = (text) => {
  return new CyrillicToTranslit().transform(text, "_").toLowerCase();
};
