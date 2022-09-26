import { format } from "date-fns";
import React from "react";

const Comments = ({ comments }) => {

  return (
    <>
      <div className="comment_area mt_60">
        <h4 className="text-uppercase color_primary mb_30">
          Comments ({comments?.length})
        </h4>
        <ul className="user_comments">
          {/* <li className="mb_20 wow animated slideInUp">
            <div className="comment_description bg_white p_20">
              <div className="author_img">
                <img src="/images/comments/01.png" alt="images" />
              </div>
              <div className="author_text">
                <div className="author_info">
                  <h5 className="author_name color_primary">Rebecca D. Nagy </h5>
                  <span>12 January, 2019 at 3.27 pm</span>
                </div>
                <p>
                  Morbi potenti arcu litora. Laoreet euismod blandit euismod
                  sit. Nisi eu Placerat ultricies faucibus interdum tellus
                  risus. Iaculis velit.
                </p>
                <a href="#" className="btn btn_info mt_15">
                  Replay
                </a>
              </div>
            </div>
          </li>
          <li className="mb_20 wow animated slideInUp">
            <div className="comment_description replied bg_white p_20">
              <div className="author_img">
                <img src="/images/comments/02.png" alt="images" />
              </div>
              <div className="author_text">
                <div className="author_info">
                  <h5 className="author_name color_primary">Malina James</h5>
                  <span>15 January, 2019 at 5.33 pm</span>
                </div>
                <p>
                  Nec platea penatibus nisi ridiculus feugiat justo torquent
                  hymenaeos suscipit platea montes. Metus porttitor fusce lectus
                  tincidunt ornare.
                </p>
                <a href="#" className="btn btn_info mt_15">
                  Replay
                </a>
              </div>
            </div>
          </li> */}
          
           

          {comments.map((comment) => {
            return (
              <li key={comment.id} className="mb_20 wow animated slideInUp">
                <div className="comment_description bg_white p_20">
                  <div className="author_img">
                    <img src="https://res.cloudinary.com/dqu7xtx64/image/upload/v1664089025/user_avatar_9871a28f94.png?updated_at=2022-09-25T06:57:07.024Z" alt="images" />
                  </div>
                  <div className="author_text">
                    <div className="author_info">
                      <h5 className="author_name color_primary">
                        {comment?.attributes?.name}
                      </h5>
                      <span>
                        { comment?.attributes?.publishedAt && format(new Date(comment?.attributes?.publishedAt), "d MMM yyyy")}
                      </span>
                    </div>
                    <div>
                      <p>{comment?.attributes?.text}</p>
                      <a href="#" className="btn btn_info mt_15">
                        Replay
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Comments;
