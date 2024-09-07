import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";

import { AllUserPosts } from "../../services/user";
import styles from "./AllPost.module.css";
import { e2p, sp } from "../../utils/date";

const AllPost = () => {
  const { data, isPending } = useQuery({
    queryKey: ["all-post-user"],
    queryFn: AllUserPosts,
  });

  console.log({ data, isPending });
  return (
    <>
      <div className={styles.list}>
        {isPending ? (
          <ClipLoader color="#a82323" />
        ) : (
          <>
            <h3>آگهی های شما</h3>
            {data.data.posts.map((post) => (
              <div key={post._id} className={styles.post}>
                <img src={`http://localhost:3400/${post.images[0]}`} />
                <div>
                  <p>{post.options.title}</p>
                  <span>{post.options.content}</span>
                </div>

                <div className={styles.price}>
                  <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                  <span>{sp(post.amount)} تومان</span>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};
export default AllPost;
