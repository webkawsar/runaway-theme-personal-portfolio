import React from "react";

const AddComment = () => {
  return (
    <>
      <div className="replay mt_60 wow animated slideInUp">
        <h4 className="text-uppercase color_primary mb_30">Leave A Replay</h4>
        <form action="#" method="post" className="reply_form">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <input
                className="form-control"
                name="author_name"
                type="text"
                placeholder="Your Name*"
              />
            </div>
            <div className="col-md-6 col-lg-6">
              <input
                className="form-control"
                name="author_email"
                type="email"
                placeholder="Email Address*"
              />
            </div>
            <div className="col-md-12">
              <textarea
                className="form-control"
                name="author_comments"
                rows="7"
                placeholder="Type Comments..."
              ></textarea>
            </div>
            <div className="col-md-12">
              <button type="submit" name="submit" className="btn btn-default">
                Post Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddComment;
