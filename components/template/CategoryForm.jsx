import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import styles from "./CategoryForm.module.css";
import { AddCategory } from "../../services/Admin";

const CategoryForm = () => {
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });

  const queryClient = useQueryClient();
  const { mutate, isLoading, error, data } = useMutation({
    mutationFn: AddCategory,
    onSuccess: () => {
      queryClient.invalidateQueries("list-category");
    },
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  console.log({ isLoading, error });
  const submitHandler = (event) => {
    event.preventDefault();

    if (!form.name || !form.slug || !form.icon) return;
    mutate(form);
    setForm({ name: "", slug: "", icon: "" });
    console.log(form);
  };

  return (
    <>
      <form
        className={styles.form}
        onChange={changeHandler}
        onSubmit={submitHandler}
      >
        <h3>ایجاد دسته بندی جدید</h3>
        {!!error && <p>مشکلی پیش آمده است لطفا دوباره امتحان کنید </p>}
        {data?.status === 201 && <p>دسته بندی با موفقیت ایجاد شد </p>}
        <label htmlFor="name">اسم دسته بندی </label>
        <input
          type="text"
          name="name"
          placeholder="نام دسته بندی را وارد کنید "
          id="name"
          value={form.name}
        />
        <label htmlFor="slug">اسلاگ </label>
        <input
          type="text"
          name="slug"
          placeholder="مسیر دسته بندی را وارد کنید   "
          id="slug"
          value={form.slug}
        />
        <label htmlFor="icon">ایکون</label>
        <input
          type="text"
          name="icon"
          placeholder=" ایکون را وارد کنید "
          id="icon"
          value={form.icon}
        />
        <button type="submit" disabled={isLoading}>
          {" "}
          ایجاد دسته
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
