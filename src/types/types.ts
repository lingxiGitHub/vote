import { Timestamp } from "firebase/firestore";

export type Comment = {
  id: string;
  userId: string;
  content: string;
  postId: string;
  timestamp: Timestamp;
  active: boolean;
};

export type Option = {
  id: string;
  optionText: string;
  postId: string;
  userVotes: string[];
  active: boolean;
};

export type Post = {
  id: string;
  content: string;
  timestamp: Timestamp;
  title: string;
  userId: string;
  active: boolean;
};

export type User = {
  id: string;
  email: string;
  password: string;
  username: string;
  active: boolean;
};
