import { useEffect, useContext } from "react";
import useGetDocs from "../../hooks/useGetDocs";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { Post } from "../../types/types";
import { postAtom } from "../../recoil/atoms";
import { parsePostResponse } from "../../libraries/parsers";

export default function Posts() {
  const { sendRequest: getDocs } = useGetDocs();

  const setPost = useSetRecoilState<Post[]>(postAtom);
  const post = useRecoilValue(postAtom);

  useEffect(() => {
    const getPost = async () => {
      const response = await getDocs<Post>({ col: "posts" });
      if (response) {
        setPost(parsePostResponse(response));
      }
    };
    getPost();


  console.log("here", post);
  }, [setPost, getDocs]);




  return <>test in post</>;
}
