import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../../apis/index"

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const id = useParams().id;
  useEffect(() => {
    axios
      .get(apiUrl.GET_ALL_POST + "/" + id)
      .then((response) => {
        setPost(response.data);
      })
      .catch((exception) => {
        console.log(exception);
      });
  }, []);

  if (!post) return "not fount!";
  return (
    <div>
      <ul>
        <li>id : {post.id}</li>
        <li>title : {post.title}</li>
        <li>description : {post.description}</li>
        <li>view : {post.view}</li>
      </ul>
    </div>
  );
};

export default SinglePost;
