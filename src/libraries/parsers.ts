import { Post } from "../types/types";

export const parsePostResponse = (response: Post[]): Post[] =>
  response.map((post: Post) => ({
    id: post?.id ?? "",
    Content: post?.Content ?? "",
    Title: post?.Title ?? "",
    Timestamp: post?.Timestamp ?? "",
    UserID: post?.UserID ?? "",
  }));
