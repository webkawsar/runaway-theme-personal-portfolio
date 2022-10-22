import React from "react";
import Comment from "./Comment";

const Comments = ({ comments }) => {
  return (
    <>
      <div className="comment_area mt_60">
        <h4 className="text-uppercase color_primary mb_30">
          Comments ({comments?.length})
        </h4>
        <ul className="user_comments">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Comments;
