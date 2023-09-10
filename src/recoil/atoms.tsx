import { atom, GetRecoilValue } from "recoil";
import { Post, Comment, Option,User } from "../types/types";

export const postAtom = atom<Post[]>({
  key: "posts",
  default: [],
});

export const commentAtom = atom<Comment[]>({
  key: "comments",
  default: [],
});

export const optionAtom = atom<Option[]>({
  key: "options",
  default: [],
});

export const userAtom = atom<User[]>({
  key: "users",
  default: [],
});