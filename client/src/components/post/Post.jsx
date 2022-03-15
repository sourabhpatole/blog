import React from "react";
import "./post.css";
const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/2602543/pexels-photo-2602543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
        srcset=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic
        reiciendis saepe obcaecati. Quaerat ullam voluptas architecto alias ipsa
        numquam saepe laboriosam, quas nostrum impedit itaque ducimus amet
        explicabo nemo? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Deleniti hic reiciendis saepe obcaecati. Quaerat ullam voluptas
        architecto alias ipsa numquam saepe laboriosam, quas nostrum impedit
        itaque ducimus amet explicabo nemo? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Deleniti hic reiciendis saepe obcaecati.
        Quaerat ullam voluptas architecto alias ipsa numquam saepe laboriosam,
        quas nostrum impedit itaque ducimus amet explicabo nemo? Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Deleniti hic reiciendis
        saepe obcaecati. Quaerat ullam voluptas architecto alias ipsa numquam
        saepe laboriosam, quas nostrum impedit itaque ducimus amet explicabo
        nemo?
      </p>
    </div>
  );
};

export default Post;
