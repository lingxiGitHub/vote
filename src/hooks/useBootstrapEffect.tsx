import { useEffect, useContext } from "react";
import useGetDocs from "./useGetDocs";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { Post, User } from "../types/types";
import { postAtom, userAtom } from "../recoil/atoms";
import { parsePostResponse, parseUserResponse } from "../libraries/parsers";

const useBootstrapEffect = () => {
  const { sendRequest: getDocs } = useGetDocs();

  const setUser = useSetRecoilState<User[]>(userAtom);
  const user = useRecoilValue(userAtom);
  console.log("???user",user)
  useEffect(() => {
    const getUser = async () => {
      const response = await getDocs<User>({ col: "users" });
      if (response) {
        setUser(parseUserResponse(response));
      }
    };
    getUser();
    // console.log("here",user);
  }, [setUser, getDocs]);
};

export default useBootstrapEffect;
