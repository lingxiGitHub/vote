import { Post, Option, Comment, User } from "../types/types";

export const parsePostResponse = (response: Post[]): Post[] =>
  response.map((post: Post) => ({
    id: post?.id ?? "",
    content: post?.content ?? "",
    title: post?.title ?? "",
    timestamp: post?.timestamp ?? "",
    userId: post?.userId ?? "",
    active: post?.active ?? true,
  }));

export const parseCommentResponse = (response: Comment[]): Comment[] =>
  response.map((comment: Comment) => ({
    id: comment?.id ?? "",
    content: comment?.content ?? "",
    postId: comment?.postId ?? "",
    timestamp: comment?.timestamp ?? "",
    userId: comment?.userId ?? "",
    active: comment?.active ?? true,
  }));

export const parseOptionResponse = (response: Option[]): Option[] =>
  response.map((option: Option) => ({
    id: option?.id ?? "",
    active: option?.active ?? "",
    optionText: option?.optionText ?? "",
    postId: option?.postId ?? "",
    userVotes: option?.userVotes ?? [],
  }));

  export const parseUserResponse = (response: User[]): User[] =>
    response.map((user: User) => ({
      id: user?.id ?? "",
      active: user?.active ?? true,
      email: user?.email ?? "",
      password: user?.password ?? "",
      username: user?.username ?? "",
    }));