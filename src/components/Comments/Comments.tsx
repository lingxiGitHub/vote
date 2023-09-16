import { useEffect } from "react";
import useGetDocs from "../../hooks/useGetDocs";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { Comment } from "../../types/types";
import { commentAtom } from "../../recoil/atoms";
import { parseCommentResponse } from "../../libraries/parsers";
import "./Comments.css"
interface CommentsProps {
  postId: string;
}

export default function Comments({ postId }: CommentsProps) {
  const { sendRequest: getDocs } = useGetDocs();

  const setComment = useSetRecoilState<Comment[]>(commentAtom);
  const comments = useRecoilValue(commentAtom);

  useEffect(() => {
    const getComment = async () => {
      const response = await getDocs<Comment>({ col: "comments" });
      // console.log("getting response?",response);
      if (response) {
        setComment(parseCommentResponse(response));
      }
    };
    getComment();
  }, [setComment, getDocs]);

  // console.log("comments", comments);

  return (
    <div className="comment-section">
      {comments.map((comment) => {
        return (
          <div key ={comment.id}>
            {comment.postId === postId && (
              <div className="comment-line">
                <div>{comment.userId}</div>: <div>{comment.content}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
