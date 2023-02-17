import axios from "axios";
import {useState , useEffect} from "react";
import "./Post.scss";
import Pagination from "../../components/Pagination/Pagination";
import PostCard from "../../components/Post/PostCard/PostCard";
import apiUrl from "../../apis/index"

const ThePost = () => {
  const [post, setPost] = useState(null);
  const [link , setLink] = useState(apiUrl.GET_ALL_POST);

  const handelLink = link => {
    setLink(link)
  }
  useEffect(() => {
    axios
      .get(link)
      .then((response) => {
        console.log(response.data)
        setPost(response.data);
      })
      .catch((exception) => {
        console.log(exception);
      });
  }, [link]);

  if (!post) return "No post!";

  return (
    <div>
      <div className="container">
        <div className="cards">
          
          {post.map((item) => (
            <PostCard key={item.id} post={item} />
          ))}
        </div>
        {/* <Pagination links={post.meta} handelLink={handelLink}/> */}
      </div>
    </div>
  );
};

export default ThePost;
