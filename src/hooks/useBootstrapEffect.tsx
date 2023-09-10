import { useEffect, useContext } from "react";
import useGetDocs from "./useGetDocs";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { Post } from "../types/types";
import { postAtom } from "../recoil/atoms";
import { parsePostResponse } from "../libraries/parsers";

const useBootstrapEffect = () => {
  const { sendRequest: getDocs } = useGetDocs();

  const setPost = useSetRecoilState<Post[]>(postAtom);
  const post = useRecoilValue(postAtom);
  useEffect(() => {
    const getPost = async () => {
      const response = await getDocs<Post>({ col: "post" });
      if (response) {
        setPost(parsePostResponse(response));
      }
    };
    getPost();
    console.log("here",post);
  }, [setPost, getDocs]);
};

export default useBootstrapEffect;
