import "./singlepost.css";
const SinglePost = () => {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          srcset=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:<b>Sourabh</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          soluta vel deserunt nihil nulla, rerum sed tempora nemo. Sunt
          accusantium sit saepe, modi pariatur adipisci consequuntur laborum
          esse dolorem laboriosam est rerum illum repellendus recusandae autem
          voluptatem nihil, cumque ut! Distinctio rem veritatis hic architecto
          voluptate minus officiis, libero at eum accusamus mollitia. Officiis,
          accusamus repudiandae. In, dignissimos cupiditate nihil eligendi
          blanditiis minima a aliquam ipsa modi repudiandae repellendus
          aspernatur incidunt atque quis consectetur quo labore quisquam
          voluptas sint deleniti. Laudantium odit labore nesciunt commodi
          repellat aut nam quia omnis provident quo asperiores quaerat,
          doloribus harum, modi culpa, vitae cupiditate?Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Nihil beatae quae perspiciatis?
          Iure ipsa, unde veniam optio architecto reprehenderit officia dicta,
          cupiditate id enim quaerat ad, sapiente ex eum. Ab vel obcaecati
          facere debitis cupiditate voluptas nulla, ducimus, neque nobis alias
          doloribus laboriosam quos libero delectus aliquam saepe veritatis quae
          eius, dicta eligendi optio ratione ad. Consequatur molestiae,
          recusandae laboriosam tenetur fuga doloremque deserunt laudantium nam.
          Obcaecati laudantium quaerat quasi fugit quas facere facilis aliquam
          laborum velit voluptatum nisi labore suscipit ut possimus, delectus
          dicta asperiores impedit, est aliquid? Distinctio nesciunt unde
          accusantium enim, voluptates placeat rerum nostrum magni assumenda?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
