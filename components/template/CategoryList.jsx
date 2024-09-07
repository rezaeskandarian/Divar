import { useQuery } from "@tanstack/react-query";
import { ListCategory } from "../../services/Admin";

import styles from "./CategoryList.module.css";
import { ClipLoader } from "react-spinners";

const CategoryList = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["list-category"],
    queryFn: ListCategory,
  });
  console.log({ data, isPending, error });

  return (
    <>
      <div className={styles.list}>
        {isPending ? (
          <ClipLoader color="#a82323" />
        ) : (
          data?.data.map((i) => (
            <div key={i._id}>
              <img src={`${i.icon}.svg`} />
              <h5>{i.name}</h5>
              <p> slug: {i.slug}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};
export default CategoryList;
