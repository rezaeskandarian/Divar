import api from "../config/api";

const AddCategory = (data) => {
  return api.post("category", data);
};

const ListCategory = () => {
  return api.get("category");
};

export { AddCategory, ListCategory };
