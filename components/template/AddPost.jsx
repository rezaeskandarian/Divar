import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

import { ListCategory } from "../../services/Admin";
import styles from "./AddPost.module.css";
import { getCookie } from "../../utils/cookie";

const AddPost = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: null,
    city: "",
    category: "",
    images: null,
  });
  const { data } = useQuery({
    queryKey: ["list-category"],
    queryFn: ListCategory,
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    console.log(event.target.files);
    if (name !== "images") {
      setForm({ ...form, [name]: event.target.value });
    } else {
      setForm({ ...form, [name]: event.target.files[0] });
    }
    console.log(form);
  };

  const sendData = (event) => {
    event.preventDefault();

    const formData = new FormData();

    for (let i in form) {
      formData.append(i, form[i]);
    }
    const token = getCookie("accessToken");
    axios
      .post("http://localhost:3400/post/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) => {
        setForm({
          title: "",
          content: "",
          amount: null,
          city: "",
          category: "",
          images: null,
        });
        toast.success("آگهی با موفقیت ایجاد شد ");
      })
      .catch((error) =>
        toast.error(
          "در هنگام ایجاد آگهی مشکلی بوجود آمده است دوباره امتحان کنید "
        )
      );
  };

  return (
    <>
      <form className={styles.form} onChange={changeHandler}>
        <h3> افزودن آگهی </h3>
        <label htmlFor="title">عنوان</label>
        <input
          type="text"
          id="title"
          name="title"
          value={form.title}
          placeholder="عنوان را وارد کنید "
        />
        <label htmlFor="content">توضیحات</label>
        <textarea id="content" name="content" />
        <label htmlFor="amount">قیمت</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={form.price}
          placeholder=" قیمت را وارد کنید   "
        />
        <label htmlFor="city">شهر</label>
        <input
          type="text"
          id="city"
          name="city"
          value={form.city}
          placeholder="شهر را وارد کنید "
        />
        <label htmlFor="category">دسته</label>
        <select id="category" name="category">
          <option></option>
          {data?.data.map((i) => (
            <option key={i._id} value={i._id}>
              {i.name}
            </option>
          ))}
        </select>
        <label htmlFor="images">آپلود عکس</label>
        <input type="file" id="images" name="images" />
        <button type="submit" onClick={sendData}>
          ایجاد
        </button>
      </form>
    </>
  );
};
export default AddPost;
