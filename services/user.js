import api from "../config/api";


const GetUser = () => {
  return api.get("user/whoami");
};

const AllUserPosts = () =>{
  return api.get("post/my")
}

const AllPosts = () => {
  return api.get("");
}
export { GetUser , AllUserPosts , AllPosts } ;
