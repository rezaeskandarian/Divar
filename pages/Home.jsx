import { useQuery } from "@tanstack/react-query";

import Main from "../components/template/Main";
import Sidebar from "../components/template/Sidebar";
import { AllPosts } from "../services/user";
import { ListCategory } from "../services/Admin";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const { data: allposts, isPending: loadingposts } = useQuery({
    queryKey: ["get-all-posts"],
    queryFn: AllPosts,
  });

  const { data: allcategory, isPending: loadingcategory } = useQuery({
    queryKey: ["list-category"],
    queryFn: ListCategory,
  });

  return (
    <>
      {loadingposts || loadingcategory ? (
        <ClipLoader color="#a82323" />
      ) : (
        <div style={{ display: "flex" }}>
          <Sidebar data={allcategory} />
          <Main data={allposts} />
        </div>
      )}
    </>
  );
};

export default Home;
