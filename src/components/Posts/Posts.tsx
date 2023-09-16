import { useEffect, useContext } from "react";
import useGetDocs from "../../hooks/useGetDocs";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { Post, User } from "../../types/types";
import { postAtom, userAtom } from "../../recoil/atoms";
import { parsePostResponse } from "../../libraries/parsers";
import Comments from "../Comments/Comments";
import Votes from "../Votes/Votes";
import "./Posts.css";

export default function Posts() {
  const { sendRequest: getDocs } = useGetDocs();
  // const users = useRecoilValue<User[]>(userAtom);
  // console.log("-->users", users);
  const setPost = useSetRecoilState<Post[]>(postAtom);
  const posts = useRecoilValue(postAtom);

  useEffect(() => {
    const getPost = async () => {
      const response = await getDocs<Post>({ col: "posts" });
      // console.log("getting response?",response);
      if (response) {
        setPost(parsePostResponse(response));
      }
    };
    getPost();
  }, [setPost, getDocs]);

  // console.log(posts);
  return (
    <div className="posts">
      {posts.map((post) => {
        return (
          <div className="indi-post" key={post.id}>
            {post.userId}: {post.content}
            <Votes postId={post.id} />
            <Comments postId={post.id} />
          </div>
        );
      })}
    </div>
  );
}
