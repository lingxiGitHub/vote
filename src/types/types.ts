import { Timestamp } from "firebase/firestore";

export type Comment = {
  id: string;
  UserID: string;
  Content: string;
  PostID: string;
  Timestamp: Timestamp;
};

export type Option = {
  id: string;
  OptionText: string;
  PostID: string;
  UserVotes: string[];
  VoteCount: number;
};

export type Post = {
  id: string;
  Content: string;
  Timestamp: Timestamp;
  Title: string;
  UserID: string;
};

export type User = {
  id: string;
  Email: string;
  Password: string;
  Username: string;
};
